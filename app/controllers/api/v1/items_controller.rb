class Api::V1::ItemsController < ApplicationController
  before_action :authenticate_user!, only: %w[create update destroy]
  before_action :find_item, only: %w[show update destroy]
  before_action :authenticate_shop_keeper, only: %w[create update destroy]

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
    @item.update(images: @item.images.push(params[:item][:images]))
    
    render_resource(@item)
  end

  def destroy
    @item.delete
  end

  private

  def find_item
    @item = Item.find(params[:id])
  end

  def item_params
    params.require(:item).permit(:name, :description, :price, :stock)
  end

  def authenticate_shop_keeper
    @shop = Shop.find_by(shopkeeper_id: current_user.id)
    puts '!!!!!!!!!!!!!!!!!!!!!'
    puts @shop
    puts current_user
    puts current_user.id
    puts @shop.shopkeeper_id
    puts '************************'
    if !@shop && (!params[:id] || !(@item.shop.shop_keeper_id === current_user.id))
      render json: { error: "Vous n'êtes pas identifié comme propriétaire de la boutique" }
    end
  end
end
