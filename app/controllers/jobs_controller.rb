require 'pry'

class JobsController < ApplicationController
  skip_before_action :authenticate

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
    @job = Job.find_by(cacheId: params[:cacheId])
    render :json => @job
  end

  def update
    @job = Job.find_by(cacheId: params[:cacheId])
    @job.update(likes: params[:likes])
    @job.save
    render :json => @job
  end

  def search
    @results = GoogleCustomSearchApi.search(params[:input])
    render :json => @results
  end

  def list
    @jobs = Job.all
    render :json => @jobs
  end

  private

  def job_params
    params.permit(:cacheId, :title, :link, :snippet, :likes)
  end
end
