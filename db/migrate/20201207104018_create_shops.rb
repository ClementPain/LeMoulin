class CreateShops < ActiveRecord::Migration[6.0]
  def change
    create_table :shops do |t|
      t.string :title
      t.text :description
      t.string :address
      t.string :zip_code
      t.string :siret
      t.boolean :is_ative, default: true

      t.belongs_to :shopkeeper, index: true

      t.timestamps
    end
  end
end
