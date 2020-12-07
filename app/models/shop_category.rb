class ShopCategory < ApplicationRecord
  # validates :title, uniqueness: true

  has_many :shop_categories_joins, dependent: :destroy
  has_many :shop_categories, through: :shop_categories_joins
end
