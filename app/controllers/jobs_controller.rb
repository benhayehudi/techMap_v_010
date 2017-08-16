require 'pry'

class JobsController < ApplicationController

  def index
    @results = GoogleCustomSearchApi.search("tech jobs in nyc")
    render :json => @results
  end

  def search
    @results = GoogleCustomSearchApi.search(params[:input])
    binding.pry
    render :json => @results
  end
end
