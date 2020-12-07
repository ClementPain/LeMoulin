class Shop < ApplicationRecord

  # Relationships
  belongs_to :shopkeeper, class_name: 'User'

  has_many :orders, dependent: :destroy
  has_many :items

  # Validation
  validates :shopkeeper_id, uniqueness: true
end
