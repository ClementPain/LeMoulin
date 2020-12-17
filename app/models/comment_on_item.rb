class CommentOnItem < ApplicationRecord
  belongs_to :user
  has_one :profile, through: :user

  belongs_to :item
  has_one :shopkeeper, through: :item

  validates :content, presence: true, length: { in: 1..300 }
end
