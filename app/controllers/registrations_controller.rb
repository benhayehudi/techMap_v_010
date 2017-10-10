# require 'securerandom'
require 'pry'

class RegistrationsController < ApplicationController
  skip_before_action :authenticate_request

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      render json: {status: 'User created successfully'}, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :bad_request
    end
  end

  def facebook
    @user = Parent.find_or_create_by(uid: auth['uid'])
    if @user.persisted? == false
      @user.name = auth['info']['name']
      @user.email = auth['info']['email']
      @user.image = auth['info']['image']
      @user.password = SecureRandom.hex
      @user.save
      session[:user_id] = @user.id
      redirect_to user_path(@user)
    else
      session[:user_id] = @user.id
      redirect_to user_path(@user)
    end
  end

  private

  def auth
    request.env['omniauth.auth']
  end

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
