class Api::V1::ShopCategoriesController < ApplicationController
  def index
    render json: ShopCategory.all
  end
end
