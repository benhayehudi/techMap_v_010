# require 'securerandom'

class RegistrationsController < ApplicationController

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      redirect_to user_path(@user)
    else
      flash[:alert] = "signup failed. please try again."
      redirect_to '/registrations/new'
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
    params.require(:user).permit(:email, :password, :password_confirmation)
  end
end
