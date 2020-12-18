class Notification < ApplicationRecord
  belongs_to :user
  
  validates :message, presence: true
  validates :message, length: { in: 3..200 }
end
