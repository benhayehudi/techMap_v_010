Rails.application.routes.draw do
  get '/api/jobs' => 'jobs#index'
  post '/api/jobs/search/:input' => 'jobs#search'

  get '/api/jobs/list' => 'jobs#list'
  post '/api/jobs/new' => 'jobs#create'
  get '/api/jobs/:cacheId' => 'jobs#show'
  post '/api/jobs/:cacheId' => 'jobs#update'
end
