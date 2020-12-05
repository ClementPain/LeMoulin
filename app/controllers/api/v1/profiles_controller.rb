class Api::V1::ProfilesController < ApplicationController
  before_action :set_profile, only: %i[show]
  
  def show
    render json: @profile
  end

  private

  def set_profile
    @profile = Profile.find(params[:id])
  end
end
