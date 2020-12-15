class Api::V1::ItemsController < ApplicationController
  before_action :authenticate_user!, only: %w[create]
  before_action :find_shop, only: %w[create]
  before_action :find_item, only: %w[show update]

  def index
    @items = Item.search(params)
    render json: @items, include: [:shop, :shop_categories]
  end

  def show
    render json: @item, include: [:shop, :shop_categories]
  end

  def create
    @item = Item.new(item_params)
    @item.shop = @shop if @shop

    if @item.save
      render json: @item, status: :created
    else
      render json: { errors: @item.errors }, status: :unprocessable_entity
    end
  end

  def update
    @item.update(item_params)
    puts '§§§§§§§§§§§§§§'
    puts params[:item][:images]
    puts '§§§§§§§§§§§§§§'
    @item.update(images: @item.images.push(params[:item][:images]))
    
    render_resource(@item)
  end

  private

  def find_item
    @item = Item.find(params[:id])
  end

  def find_shop
    @shop = Shop.find_by(shopkeeper_id: current_user.id)
  end

  def item_params
    params.require(:item).permit(:name, :description, :price, :stock)
  end
end
