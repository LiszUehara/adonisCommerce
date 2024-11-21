import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.string('name', 256).notNullable()
      table.string('email', 256).unique()
      table.string('password', 256).notNullable()
      table.string('cpf', 11).notNullable().unique()
      table.string('phone', 11)
      table.string('street', 256)
      table.string('neighborhood', 256)
      table.string('city', 256)
      table.string('state', 256)
      table.string('country', 256)
      table.string('cep', 20).notNullable()
      table.string('numberHouse', 10).notNullable()
      table.string('complement', 256).nullable()

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
