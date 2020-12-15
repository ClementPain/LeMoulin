class Api::V1OrdersController < Api::V1::BaseController
  
  before_action :authenticate_user!, only: [:create]
  
  def create
    
  end

  def order_params
    params.require(:order).permit(:shop_id, :order_items)
  end
end
