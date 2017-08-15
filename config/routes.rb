Rails.application.routes.draw do
  get '/api/jobs' => 'jobs#index'
end
