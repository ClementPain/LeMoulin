class User < ApplicationRecord

  # Callbacks
  # after_create :create_my_profile, :welcome_send

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise  :database_authenticatable, :registerable,
          :recoverable, :rememberable, :validatable,
          :jwt_authenticatable, jwt_revocation_strategy: JwtDenylist

  # Relationships
  has_one :profile , dependent: :destroy
  has_one :shop, class_name: 'Shop', foreign_key: 'shopkeeper_id', dependent: :destroy
  has_many :orders, class_name: 'Order', foreign_key: 'customer_id', dependent: :destroy
  has_many :notifications, dependent: :destroy
  
  # Instance methods
  def has_a_shop
    self.shop ? true : false
  end

  def welcome_send
    UserMailer.welcome_email(self).deliver_now
  end

  private

  def create_my_profile
    self.update(profile: Profile.new(zip_code: '00000'))
  end

end
