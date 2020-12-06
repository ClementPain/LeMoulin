class Profile < ApplicationRecord
  # Relationships
  belongs_to :user

  # Validations
  enum role: [ :client, :shopkeeper, :admin ]
  validates :role, inclusion: { in: roles.keys }

  validates :role, presence: true
  validates :user_id, uniqueness: true
end
