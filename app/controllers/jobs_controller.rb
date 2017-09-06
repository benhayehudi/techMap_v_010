require 'pry'

class JobsController < ApplicationController

  def index
    @results = GoogleCustomSearchApi.search("tech jobs in nyc")
    render :json => @results
  end

  def create
    
  end

  def show
    render :json => @job
  end

  def update

  end

  def search
    @results = GoogleCustomSearchApi.search(params[:input])
    render :json => @results
  end

  private

  def job_params
    params.permit(:jobId, :likeCounter)
  end
end
