class Shop < ApplicationRecord

  # Relationships
  belongs_to :shopkeeper, class_name: 'User', foreign_key: 'shopkeeper_id', validate: true

  has_many :orders, dependent: :destroy
  has_many :items
  has_many :shop_categories_joins, dependent: :destroy
  has_many :shop_categories, through: :shop_categories_joins

  # Validation
  validates :shopkeeper_id, uniqueness: true

  # scopes
  scope :select_active_shops, lambda { 
    where(is_active: true)
  }

  scope :filter_by_name, lambda { |keyword|
    where('lower(name) LIKE ? ', "%#{keyword.downcase}%")
  }

  scope :filter_by_description, lambda { |keyword|
    where('lower(description) LIKE ? ', "%#{keyword.downcase}%")
  }

  scope :filter_by_categories, lambda { |categories|
    select{ |shop| !( shop.shop_categories.map{ |cat| cat.title } & categories.split(',') ).empty? }
  }

  # methodes
  def self.search(params)
    shops = Shop.all.select_active_shops
    shops = shops.filter_by_name(params[:keyword]).or(shops.filter_by_description(params[:keyword])) if params[:keyword]
    shops = shops.filter_by_categories(params[:categories]) if params[:categories]

    shops
  end
end
