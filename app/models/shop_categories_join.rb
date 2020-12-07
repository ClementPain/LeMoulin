class ShopCategoriesJoin < ApplicationRecord
  belongs_to :shop_category
  belongs_to :shop
end
