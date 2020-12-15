class Item < ApplicationRecord

  # Relationships
  belongs_to :shop

  has_many :order_items, dependent: :destroy
  has_many :orders, through: :order_items
  has_many :shop_categories, through: :shop

  # Validation
  validates :name, :description, :price, :stock, presence: true
  validates :name, length: { in: 3..80 }
  validates :description, length: { in: 5..800 }
  validates :price, format: { with: /\A\d+(?:\.\d{0,2})?\z/ }, numericality: {greater_than_or_equal_to: 0}

  #Scopes
  scope :select_active_items, lambda { 
    where(is_available_for_sale: true).where('stock > ?', 0)
  }

  scope :filter_by_name, lambda { |keyword|
    where('lower(name) LIKE ? ', "%#{keyword.downcase}%")
  }

  scope :filter_by_description, lambda { |keyword|
    where('lower(description) LIKE ? ', "%#{keyword.downcase}%")
  }

  scope :filter_by_category, lambda { |searched_category|
    select{ |item| 
      item.shop_categories.map{ |cat|
        cat.title.downcase
      }.include?(searched_category.downcase)
    }
  }

  scope :filter_by_categories, lambda { |searched_categories|
    select{ |item|
      !( item.shop_categories.map{ |cat| cat.title } & searched_categories.split(',') ).empty?
    }
  }

  # methodes
  def self.search(params)
    items = Item.all.select_active_items
    items = items.filter_by_name(params[:keyword]).or(items.filter_by_description(params[:keyword])) if params[:keyword]
    if params[:category]
      items = items.filter_by_category(params[:category])
    elsif params[:categories]
      items = items.filter_by_categories(params[:categories])
    end

    items
  end
end
