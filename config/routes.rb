Rails.application.routes.draw do
  get '/api/jobs' => 'jobs#index'
  post '/api/jobs/search' => 'jobs#search'
end
