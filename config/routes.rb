Rails.application.routes.draw do
  get '/api/jobs' => 'jobs#index'
  post '/api/jobs/search/:input' => 'jobs#search'

  get '/api/jobs/list' => 'jobs#list'
  post '/api/jobs/new' => 'jobs#create'
  post '/api/jobs/:jobId' => 'jobs#update'
end
