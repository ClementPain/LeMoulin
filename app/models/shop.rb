class Shop < ApplicationRecord

  # Relationships
  belongs_to :shopkeeper, class_name: 'User'

  has_many :orders, dependent: :destroy
  has_many :items
  has_many :shops_categories_join, dependent: :destroy
  has_many :shops_categories, through: :shops_categories_join

  # Validation
  validates :shopkeeper_id, uniqueness: true
end
