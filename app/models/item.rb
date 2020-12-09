class Item < ApplicationRecord

  # Relationships
  belongs_to :shop

  has_many :order_items, dependent: :destroy
  has_many :orders, through: :order_items
  has_many :shop_categories, through: :shop
end
