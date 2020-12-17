class Api::V1::CartsController < ApplicationController
  def create
    @items_in_cart = {}

    puts '$$$$$$$$$$$$$$$$$$$'
    puts params
    puts '§§§§§§§§§§§§§§§§§§§'

    params['cart'].each do |shop, items|
      @items_in_cart[shop] = {}
      @items_in_cart[shop]['shop'] = Shop.find(shop.to_i)
      @items_in_cart[shop]['items'] = {}

      items.each do |item, nb_in_cart|
        @items_in_cart[shop]['items'][item] = {}
        @items_in_cart[shop]['items'][item]['data'] = Item.find(item.to_i)
        @items_in_cart[shop]['items'][item]['in_cart'] = nb_in_cart
      end
    end

    render json: @items_in_cart
  end
end
