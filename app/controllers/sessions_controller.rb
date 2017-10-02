class SessionsController < ApplicationController
  skip_before_action :authenticate_request

  def new
    @user = User.find_by(email: params[:email])
  end

  def index
    @user = User.find_by(email: request.headers["email"])
    render json: @user
  end

  def create
    command = AuthenticateUser.call(params[:auth][:email], params[:auth][:password])
    if command.success?
      render json: { jwt: command.result }
    else
      render json: { error: command.errors }, status: :unauthorized
    end
  end

  def destroy
    reset_session
    redirect_to new_session_path
  end

end
