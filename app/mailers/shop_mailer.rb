class ShopMailer < ApplicationMailer

  def creation_confirmation(shop)
    @shop = shop
    @url  = 'http://lemoulin.herokuapp.com/'
    mail(
      to: @shop.user.email
      subject: "Boutique #{shop.name} crée !"
    )
  end
end
