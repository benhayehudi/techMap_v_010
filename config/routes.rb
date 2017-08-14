Rails.application.routes.draw do
  get '/api/jobs/all' => 'jobs#index'
end
