class Api::V1::ShopsController < ApplicationController
  def index
    render json: Shop.all
  end
end
