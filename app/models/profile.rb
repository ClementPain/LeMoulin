class Profile < ApplicationRecord
  # Relationships
  belongs_to :user

  # Validations
  validates :user_id, uniqueness: true
  validates :zip_code, format: { 
    with: /\A(([0-8][0-9])|(9[0-5])|(2[ab]))[0-9]{3}\z/, 
    message: "Merci de rentrer un code postal français valide." 
  }
end
