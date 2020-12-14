class Api::V1::ProfilesController < Api::V1::BaseController
  
  before_action :authenticate_user!
  before_action :set_profile, only: %i[show update]
  before_action :do_not_allow_to_updating_a_profile_other_your_own, only: [:update]

  def show
    render_resource(@profile)
  end

  def update
    @profile = current_user.profile
    if params{:avatar}
      puts params{:avatar}
    else 
      @profile.update(profile_params)
    end
    render_resource(@profile)
  end

  private

  def set_profile
    @profile = Profile.find(params[:id])
  end

  def profile_params
    params.require(:profile).permit(:last_name, :first_name, :address, :zip_code)  
  end

  def do_not_allow_to_updating_a_profile_other_your_own
    @profile = Profile.find(params[:id])
    if @profile.user =! current_user
      render json: {
        errors: [
          {
            status: '403',
            title: 'Bad Request',
            detail: 'You aren\'t allowed to update a profile other than yours',
            code: '100'
          }
        ]
      }, status: :bad_request
    end
  end
end
