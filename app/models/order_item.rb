class OrderItem < ApplicationRecord

  # Relationships
  belongs_to :item
  belongs_to :order
end
