class Api::V1::ShopCategoriesController < Api::V1::BaseController
  def index
    render json: ShopCategory.all
  end
end
