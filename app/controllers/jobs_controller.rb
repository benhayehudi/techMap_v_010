require 'pry'

class JobsController < ApplicationController

  def index
    @results = GoogleCustomSearchApi.search("tech jobs in nyc")
    render :json => @results
  end

  def create
    @job = Job.new(job_params)
    if @job.save
      render :json => @job
    end
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

  def list
    @results = Job.all
    render :json => @results
  end

  private

  def job_params
    params.permit(:cacheId, :title, :link, :snippet, :likes)
  end
end
