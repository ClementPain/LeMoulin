class Api::V1::OrderItemsController < Api::V1::BaseController
  before_action :authenticate_user!

  def index
    @order = Order.find(params[:order_id])
    @order_items = @order.order_items

    render json: @order_items, include: [:item] 
  end
end
