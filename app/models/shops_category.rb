class ShopsCategory < ApplicationRecord
  validates :title, uniqueness: true

  has_many :shops_categories_join, dependent: :destroy
  has_many :shops_categories, through: :shops_categories_join
end
