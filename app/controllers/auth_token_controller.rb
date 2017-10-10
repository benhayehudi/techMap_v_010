# require_dependency "knock/application_controller"

# module Knock
  class AuthTokenController < ApplicationController
    before_action :authenticate_token!

    def login
      @user = User.find_by(email: params[:user][:email])
      if !@user
        render json: {
          errors: ["Unable to find user with that username"]
        }, status: 403
      elsif @user&.authenticate(params[:user][:password])
        render 'users/user_with_token.json.jbuilder', user: @user
      else
        render json: {
          errors: ["Password does not match"]
        }, status: 403
      end
    end


    def create
      render json: { jwt: auth_token.token }, status: :created
    end

  private

    # def authenticate!
    #   raise Knock.not_found_exception_class unless user.authenticate(auth_params[:password])
    # end

    def auth_token
      AuthToken.new payload: { sub: user.id }
    end

    # def user
    #   Knock.current_user_from_handle.call auth_params[Knock.handle_attr]
    # end

    def auth_params
      params.require(:auth).permit Knock.handle_attr, :password
    end

  end
# end
