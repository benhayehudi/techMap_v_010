Rails.application.routes.draw do
  get '/api/jobs' => 'jobs#index'
  get '/api/jobs/search/:input' => 'jobs#search'
end
