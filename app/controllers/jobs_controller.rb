require 'pry'

class JobsController < ApplicationController
  before_action :authenticate_request, only: [:list, :create, :destroy]

  def index
    @results = GoogleCustomSearchApi.search("tech jobs in nyc")
    render :json => @results
  end

  def create
    params[:user_id] = @current_user.id
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
    @jobs = Job.where(user_id: @current_user.id)
    render :json => @jobs
  end

  def destroy
    @jobs = Job.where(user_id: @current_user.id)
    @job = Job.find_by(cacheId: params[:cacheId])
    @job.destroy
    render :json => @jobs
  end

  private

  def job_params
    params.permit(:cacheId, :title, :link, :snippet, :likes, :user_id)
  end
end
