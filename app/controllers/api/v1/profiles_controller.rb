class Api::V1::ProfilesController < Api::V1::BaseController
  
  before_action :authenticate_user!
  before_action :set_profile, only: %i[show]
  
  def show
    render_resource(@profile)
  end

  private

  def set_profile
    @profile = Profile.find(params[:id])
  end
end
