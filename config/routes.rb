Rails.application.routes.draw do
  get '/api/jobs' => 'jobs#index'
  post '/api/jobs/search/:input' => 'jobs#search'

  get '/api/jobs/likes/:jobId' => 'jobs#show'
  post '/api/jobs/likes/:jobId' => 'jobs#update'
end
