class Profile < ApplicationRecord
  # Relationships
  belongs_to :user

  # Validations
  validates :user_id, uniqueness: true
end
