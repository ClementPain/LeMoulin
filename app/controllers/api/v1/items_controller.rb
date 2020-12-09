class Api::V1::ItemsController < ApplicationController
  def index
    @items = Item.search(params)
    render json: @items, include: [:shop, :shop_categories]
  end
end
