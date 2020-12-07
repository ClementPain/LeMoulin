class ShopsCategory < ApplicationRecord
  validates :title, uniqueness: true
end
