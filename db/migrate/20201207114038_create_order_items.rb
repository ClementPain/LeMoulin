class CreateOrderItems < ActiveRecord::Migration[6.0]
  def change
    create_table :order_items do |t|
      t.integer :quantity

      t.belongs_to :item, index: true
      t.belongs_to :order, index: true

      t.timestamps
    end
  end
end
