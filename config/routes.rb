Rails.application.routes.draw do
  get '/api/jobs' => 'jobs#index'
  get '/api/jobs/search' => 'jobs#search'
end
