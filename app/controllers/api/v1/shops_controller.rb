class Api::V1::ShopsController < Api::V1::BaseController
  def index
    puts params[:keywords]

    render json: Shop.all
  end
end
