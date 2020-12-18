class Api::V1::ShopsController < Api::V1::BaseController
  before_action :set_shop, only: %w[show update]
  before_action :authenticate_user!, only: %w[create update]
  before_action :not_permit_to_create_more_than_one_shop, only: %w[create]
  before_action :do_not_allow_to_update_a_shop_other_your_own, only: %w[update]
  
  def index
    @shops = Shop.search(params)
    render json: @shops, include: [:shop_categories]
  end

  def show
    render json: @shop, include: [:shop_categories, :items]
  end

  def create
    shop_category_ids = shop_params[:shop_category_ids]
    shop_full_params = shop_params.merge({
      shopkeeper: current_user,
      shop_category_ids: shop_category_ids,
    })

    @shop = Shop.create(shop_full_params)
    render_resource(@shop)
  end

  def update
    @shop.update(shop_params)
    
    render json: @shop, status: :created
  end

  private

  def set_shop
    @shop = Shop.find(params[:id])
  end

  def shop_params
    params.require(:shop).permit(:name, :description, :address, :zip_code, :city, :siret, :is_active, :image, shop_category_ids: [])
  end

  def not_permit_to_create_more_than_one_shop
    if current_user_has_already_a_shop
      render json: {
        errors: [
          {
            status: '403',
            title: 'Bad Request',
            detail: 'You aren\'t allowed to create more than one shop',
            code: '100'
          }
        ]
      }, status: :bad_request
    end
  end

  def do_not_allow_to_update_a_shop_other_your_own
    if @shop.shopkeeper_id =! current_user.id
      render json: {
        errors: [
          {
            status: '403',
            title: 'Bad Request',
            detail: 'You aren\'t allowed to update a shop other than yours',
            code: '100'
          }
        ]
      }, status: :bad_request
    end
  end
end
