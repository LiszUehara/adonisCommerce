import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'sales'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.integer('quantity').defaultTo(1)
      table.decimal('unity_value').notNullable()
      table.decimal('total_value').notNullable()
      table.integer('user_id').unsigned().references('id').inTable('users').notNullable()
      table.integer('product_id').unsigned().references('id').inTable('products').notNullable()

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
