class Api::V1::OrdersController < Api::V1::BaseController

  before_action :authenticate_user!, only: [:create, :index]
  
  def index
    @shop_id = params[:shop_id] 
    if @shop_id
      @shop = Shop.find(@shop_id)

      render json: @shop.orders.to_json(:include => { :customer => {:include =>{:profile => {:only => [:last_name, :first_name]}}} })
    else
      @orders = current_user_orders

      render json: @orders, include: [:shop => {only: :name}]
    end
  end
  
  def create
    @orders = []
    @errors = []

    params['order'].each do |shop, items|
      @order = Order.new(shop: Shop.find(shop.to_i), customer: current_user)
      nb_order_item_created = 0

      items.each do |item, nb_in_cart|
        if (Item.find(item).stock > 0 && nb_in_cart.to_i > 0)
          nb_order_item_created += 1
          if (Item.find(item).stock < nb_in_cart.to_i)
            @errors.push("not enough stock")
          else
            @order_item = OrderItem.new(quantity: nb_in_cart, order: @order, item_id: item)

            if !@order_item.save
              @errors.push(@order_item.errors)
            else
              Item.find(item).update(stock: Item.find(item).stock - nb_in_cart.to_i)
            end
          end
        end
      end

      if nb_order_item_created > 0
        if !@order.save || @errors.length > 0
          render json: @errors, status: :unprocessable_entity
        else
          @orders.push(@order)
        end
      end
    end

    if @errors.length === 0
      render json: @orders, status: :created
    end
  end

  def update
    @order = Order.find(params[:id])
    @order.update(order_params)

    Notification.create(user_id: @order.customer_id, message: 'Votre commande est prête !', for_shopkeeper: false)

    render_resource(@order)
  end

  private

  def order_params
    params.require(:order).permit(:shop_id, :status)
  end
end
