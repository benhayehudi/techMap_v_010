require 'pry'
class JobsController < ApplicationController

  def index
  #OpenSSL::SSL::VERIFY_PEER = OpenSSL::SSL::VERIFY_NONE
  @results = GoogleCustomSearchApi.search("tech jobs in new york city")
  render :json => @results
  binding.pry
  end
end
