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
  after_create :send_notification_to_shop_keeper

  def send_notification_to_shop_keeper
    puts '$$$$$$$$$$$$$$'
    puts self.shop.shopkeeper_id
    puts '$$$$$$$$$$$$$'

    Notification.create(user_id: self.shop.shopkeeper_id, message: "Vous avez reçu une commande", for_shopkeeper: true)
  end
end
