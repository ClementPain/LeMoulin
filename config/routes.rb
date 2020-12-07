Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'shops_categories/index'
    end
  end
  root to: 'pages#index'
  
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :users, only: %w[show]
      resources :profiles, only: %w[show]
      resources :shops_categories, only: %w[index]
    end
  end

  devise_for :users,
    defaults: { format: :json },
    path: '',
    path_names: {
      sign_in: 'api/v1/login',
      sign_out: 'api/v1/logout',
      registration: 'api/v1/signup'
    },
    controllers: {
      sessions: 'sessions',
      registrations: 'registrations'
    }
  
  get '*path', to: 'pages#index'
end
