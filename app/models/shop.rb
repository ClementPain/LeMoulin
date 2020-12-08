class Shop < ApplicationRecord

  # Relationships
  belongs_to :shopkeeper, class_name: 'User', foreign_key: 'shopkeeper_id', validate: true

  has_many :orders, dependent: :destroy
  has_many :items
  has_many :shop_categories_joins, dependent: :destroy
  has_many :shop_categories, through: :shop_categories_joins

  # Validation
  validates :shopkeeper_id, uniqueness: true

  scope :filter_by_name, lambda { |keyword|
    where('lower(name) LIKE ? ', "%#{keyword.downcase}%")
  }

  scope :filter_by_description, lambda { |keyword|
    where('lower(description) LIKE ? ', "%#{keyword.downcase}%")
  }

  def self.search(params)
    shops = Shop.all
    shops = shops.filter_by_name(params[:keyword]).or(shops.filter_by_description(params[:keyword])) if params[:keyword]

    shops
  end
end
