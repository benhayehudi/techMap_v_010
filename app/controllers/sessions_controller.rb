class SessionsController < ApplicationController
  skip_before_action :authenticate_request

  def new
    @user = User.find_by(email: params[:email])
  end

  def create
    command = AuthenticateUser.call(params[:email], params[:password]) 
    if command.success? 
      render json: { auth_token: command.result } 
    else 
      render json: { error: command.errors }, status: :unauthorized 
    end 
  end

  def destroy
    reset_session
    redirect_to new_session_path
  end
end
