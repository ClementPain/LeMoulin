class RegistrationsController < ApplicationController
  def create
    build_resource(sign_up_params)
    resource.save
    sign_up(resource_name, resource) if resource.persisted?

    render_resource(resource)
  end
end
