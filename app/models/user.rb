class User < ApplicationRecord

  after_create :create_my_profile
  
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise  :database_authenticatable, :registerable,
          :recoverable, :rememberable, :validatable,
          :jwt_authenticatable, jwt_revocation_strategy: JwtDenylist

  # Relationships
  has_one :profile , dependent: :destroy
  has_one :shop, class_name: 'Shop', foreign_key: 'shopkeeper_id', dependent: :destroy
  has_many :orders, dependent: :destroy

  # Validations
  validates :zip_code, format: { 
    with: /\A(([0-8][0-9])|(9[0-5])|(2[ab]))[0-9]{3}\z/, 
    message: "Merci de rentrer un code postal français valide." 
  }
  
  # Instance methods
  def has_shop
    self.shop ? true : false
  end

  private

  def create_my_profile
    self.update(profile: Profile.new)
  end

end
