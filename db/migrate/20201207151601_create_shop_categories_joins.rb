class CreateShopCategoriesJoins < ActiveRecord::Migration[6.0]
  def change
    create_table :shop_categories_joins do |t|
      t.belongs_to :shop_category, index: true
      t.belongs_to :shop, index: true

      t.timestamps
    end
  end
end
