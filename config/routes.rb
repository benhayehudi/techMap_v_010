Rails.application.routes.draw do
  post 'user_token' => 'sessions#create'
  get '/api/jobs' => 'jobs#index'
  post '/api/jobs/search/:input' => 'jobs#search'

  get '/api/jobs/list' => 'jobs#list'
  post '/api/jobs/new' => 'jobs#create'
  get '/api/jobs/:cacheId' => 'jobs#show'
  post '/api/jobs/:cacheId' => 'jobs#update'
  delete '/api/jobs/:cacheId' => 'jobs#destroy'

  resources :users
  mount Knock::Engine => "/knock"
  post '/knock/auth_token' => 'auth_token#login'

  resources :registrations, only: [:new, :create]
  post '/registrations/new' => 'registrations#create'
  get '/logout' => 'sessions#destroy'

  resources :sessions, only: [:new, :create, :destroy]
  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/api/user/index' => 'sessions#index'
end
