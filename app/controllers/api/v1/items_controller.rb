class Api::V1::ItemsController < ApplicationController
  def index
    @items = Item.all
    render json: @items, include: [:shop, :shop_categories]
  end
end
