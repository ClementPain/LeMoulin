class Order < ApplicationRecord

  # Relationships
  belongs_to :shop
  belongs_to :customer, class_name: 'User'

  has_many :order_items, dependent: :destroy
  has_many :items, through: :order_items
  
  # Validations
  enum status: [ :in_progress, :prepared, :validated, :canceled ]
  validates :status, inclusion: { in: statuses.keys }

  # Notifications
end
