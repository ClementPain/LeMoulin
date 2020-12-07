class Shop < ApplicationRecord

  # Relationships
  belongs_to :shopkeeper, class_name: 'User', foreign_key: 'shopkeeper_id', validate: true

  has_many :orders, dependent: :destroy
  has_many :items
  has_many :shop_categories_joins, dependent: :destroy
  has_many :shop_categories, through: :shop_categories_joins

  # Validation
  validates :shopkeeper_id, uniqueness: true
end
