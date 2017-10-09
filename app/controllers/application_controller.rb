class ApplicationController < ActionController::API
  before_action :authenticate_request
  attr_reader :current_user

  def about
  end

  def contact
  end

  private

  def authenticate_request
    @current_user = AuthorizeApiRequest.call(request.headers).result
    render json: { error: 'Not Authorized' }, status: 401 unless @current_user
  end

  def logged_in?
    @active_user ||= User.find_by(email: params[:auth][:email])
  end
end
