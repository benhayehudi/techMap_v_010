class JobsController < ApplicationController

  def index
  #OpenSSL::SSL::VERIFY_PEER = OpenSSL::SSL::VERIFY_NONE
  results = GoogleCustomSearchApi.search("web developer jobs")
  render :json => results
  end
end
