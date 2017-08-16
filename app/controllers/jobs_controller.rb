require 'pry'

class JobsController < ApplicationController

  def index
    @results = GoogleCustomSearchApi.search("tech jobs in nyc")
    render :json => @results
  end

  def search
    @input = params[:input]
    @results = GoogleCustomSearchApi.search(@input)
    binding.pry
    render :json => @results
  end
end
