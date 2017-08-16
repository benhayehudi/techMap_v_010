Rails.application.routes.draw do
  get '/api/jobs' => 'jobs#index'
  post '/api/jobs/search/:input' => 'jobs#search'
end
