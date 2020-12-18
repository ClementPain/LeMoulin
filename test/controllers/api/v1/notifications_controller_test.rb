require 'test_helper'

class Api::V1::NotificationsControllerTest < ActionDispatch::IntegrationTest
  test "should get update" do
    get api_v1_notifications_update_url
    assert_response :success
  end

  test "should get destroy" do
    get api_v1_notifications_destroy_url
    assert_response :success
  end

end
