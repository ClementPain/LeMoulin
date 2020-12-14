class Api::V1::ItemsController < ApplicationController
  before_action :authenticate_user!, only: %w[create]
  before_action :find_shop, only: %w[create]
  before_action :set_item, only: %w[show]

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

  private

  def set_item
    @item = Item.find(params[:id])
  end

  def find_shop
    @shop = Shop.find_by(shopkeeper_id: current_user.id)
  end

  def item_params
    params.require(:item).permit(:name, :description, :price, :stock)
  end
end
