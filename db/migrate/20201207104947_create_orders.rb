class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
      t.integer :status, default: 0

      t.belongs_to :shop, index: true
      t.belongs_to :customer, inde: true

      t.timestamps
    end
  end
end
