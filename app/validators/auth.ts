import vine from '@vinejs/vine'

const password = vine.string().minLength(8)

export const registerValidator = vine.compile(
  vine.object({
    email: vine
      .string()
      .email()
      .normalizeEmail()
      .unique(async (db, value) => {
        const match = await db.from('users').select('id').where('email', value).first()
        return !match
      }),
    password,
    name: vine.string(),
    cpf: vine.string(),
    phone: vine.string(),
    street: vine.string(),
    neighborhood: vine.string(),
    city: vine.string(),
    state: vine.string(),
    country: vine.string(),
    cep: vine.string(),
    numberHouse: vine.string(),
    complement: vine.string(),
  })
)

export const loginValidator = vine.compile(
  vine.object({
    email: vine.string().email().normalizeEmail(),
    password,
  })
)
