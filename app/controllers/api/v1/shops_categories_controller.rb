class Api::V1::ShopsCategoriesController < ApplicationController
  def index
    render json: ShopsCategory.all
  end
end
