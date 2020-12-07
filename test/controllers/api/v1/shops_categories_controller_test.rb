require 'test_helper'

class Api::V1::ShopsCategoriesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_v1_shops_categories_index_url
    assert_response :success
  end

end
