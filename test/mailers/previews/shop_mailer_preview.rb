# Preview all emails at http://localhost:3000/rails/mailers/shop_mailer
class ShopMailerPreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/shop_mailer/creation_confirmation
  def creation_confirmation
    ShopMailer.creation_confirmation
  end

end
