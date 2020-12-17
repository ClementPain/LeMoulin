class Api::V1::OrdersController < Api::V1::BaseController
  before_action :authenticate_user!, only: [:create, :index]
  
  def index
    @orders = current_user_orders

    render json: @orders, include: [:shop => {only: :name}]
  end
  
  def create
    @orders = []
    @errors = []

    puts '$$$$$$$$$$$$$$$$$$$'
    puts 'order'
    puts params['order']

    params['order'].each do |shop, items|
      @order = Order.new(shop: Shop.find(shop.to_i), customer: current_user)

      puts '@order'
      puts @order
      puts items

      items.each do |item, nb_in_cart|
        puts 'item'
        puts item
        @order_item = OrderItem.new(quantity: nb_in_cart, order: @order, item_id: item)
        
        if !@order_item.save
          @errors.push(@order_item.errors)
        end
      end

      if @order.save
        @orders.push(@order)
      else
        render json: @errors, status: :unprocessable_entity
      end
    end
    puts '$$$$$$$$$$$$$$$$$$$'
    render json: @orders, status: :created
  end

  private

  def order_params
    params.require(:order).permit(:shop_id)
  end
end
