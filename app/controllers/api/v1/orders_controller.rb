class Api::V1::OrdersController < Api::V1::BaseController
  
  before_action :authenticate_user!, only: [:create]
  
  def index
    @orders = current_user_orders

    render json: @orders
  end
  
  def create
    
  end

  def order_params
    
  end
end
