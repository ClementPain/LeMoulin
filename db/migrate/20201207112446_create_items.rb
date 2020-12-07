class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
      t.string :name
      t.text :description
      t.float :price
      t.integer :stock

      t.belongs_to :shop, index: true

      t.timestamps
    end
  end
end
