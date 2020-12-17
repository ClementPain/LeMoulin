class ShopMailer < ApplicationMailer

  def creation_confirmation(shop)
    @shop = shop
    @user = @shop.shopkeeper

    @url  = 'http://lemoulin.herokuapp.com/'
    mail(
      to: @shop.shopkeeper.email,
      subject: "Boutique #{shop.name} crée !"
    )
  end
end
