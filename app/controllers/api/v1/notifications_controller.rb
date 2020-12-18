class Api::V1::NotificationsController < ApplicationController
  before_action :authenticate_user!
  before_action :find_not, only: %w[update destroy]

  def index
    @notifications = Notification.all.where(user_id: current_user.id)

    render json: @notifications
  end
  
  def update
    @not.update(read: true)

    render json: @not
  end

  def destroy
    @not.delete

    render json: { message: 'notification supprimée'}
  end

  private

    def find_not
      @not = Notification.find(params[:id])
    end
end
