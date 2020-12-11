class Api::V1::ShopsController < Api::V1::BaseController
  before_action :set_shop, only: %w[show]
  before_action :authenticate_user!, only: %w[create]
  
  def index
    @shops = Shop.search(params)
    render json: @shops, include: [:shop_categories]
  end

  def show
    render json: @shop, include: [:shop_categories]
  end


  def create
    @user = current_user
    if !@user.profile.is_shopkeeper
      @shop = Shop.new(shop_params)
      @shop.shopkeeper = current_user

      #ShopCategoriesJoin.new( shop_id: @shop.id, shop_category_id: ShopCategory.last.id )
      if @shop.save
        render json: @shop
      else
        render json: @shop.errors   
      end
    end

  end

  private

  def set_shop
    @shop = Shop.find(params[:id])
  end

  def shop_params
    params.require(:shop).permit(:name, :description, :address, :zip_code, :city, :siret, :is_active)
  end  

  #def shop_categories_params
   # params.require(:shop_categories).permit(:id, :title)
  #end  
end


