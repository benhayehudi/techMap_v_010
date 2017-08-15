Rails.application.routes.draw do
  namespace :api do
    resources :jobs, except: [:new, :create, :edit, :destroy, :update, :show]
  end
end
