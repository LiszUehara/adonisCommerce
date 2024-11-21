import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Sale extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare unityValue: number

  @column()
  declare totalValue: number

  @column()
  declare quantity: number

  @column()
  declare userId: number

  @column()
  declare productId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null
}
