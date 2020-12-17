class Api::V1::OrdersController < Api::V1::BaseController
  
  before_action :authenticate_user!, only: [:create]
  
  def index
    @orders = current_user_orders

    render json: @orders, include: [:shop => {only: :name}]
  end
  
  def create
    @order = Order.new(params)
  end

  private

  def order_params
    params.require(:order).permit(:name, :description, :price, :stock, :is_available_for_sale)
  end
end
