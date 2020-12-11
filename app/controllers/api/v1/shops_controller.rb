class Api::V1::ShopsController < Api::V1::BaseController
  before_action :set_shop, only: %w[show]
  
  def index
    @shops = Shop.search(params)
    render json: @shops, include: [:shop_categories]
  end

  def show
    render json: @shop, include: [:shop_categories]
  end

  private

  def set_shop
    @shop = Shop.find(params[:id])
  end
end
