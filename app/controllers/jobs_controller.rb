require 'pry'

class JobsController < ApplicationController

  def index
    @results = GoogleCustomSearchApi.search("tech jobs in nyc")
    @results.items.each do |job|
      if Joblikes.find_by(jobId: job.cacheId) != true
        job = Joblikes.new(job_params)
        job.save
      end
    end
    render :json => @results
  end

  def create
    @job = Joblikes.new(job_params)
    if @job.save
      render :json => @job
    end
  end

  def show
    @job = Joblikes.find_by(jobId: params[:input])
    render :json => @job
  end

  def update
    @job = Joblikes.find_by(jobId: params[:input])
    @job.update(job_params)
    @job.save
  end

  def search
    @results = GoogleCustomSearchApi.search(params[:input])
    @results.each do |job|
      if Joblikes.find_by(jobId: job.cacheId) != true
        job = Joblikes.new(job_params)
        job.save
      end
    end
    render :json => @results
  end

  private

  def job_params
    params.permit(:jobId, :likeCounter)
  end
end
