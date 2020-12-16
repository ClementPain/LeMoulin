module Api::V1::UsersHelper
  def current_user_has_already_a_shop
    current_user.has_a_shop
  end

  def current_user_orders
    current_user.orders
  end
end
