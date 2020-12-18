Rails.application.routes.draw do
  root to: 'pages#index'
  
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :users, only: %w[show]
      resources :profiles, only: %w[update]
      resources :shops, only: %w[index show create update]
      resources :shop_categories, only: %w[index]
      resources :items, only: %w[index show create update destroy] do
        resources :comment_on_items, only: %w[index create update destroy] 
      end
      resources :carts, only: %w[create] 
      resources :orders, only: %w[index create] do
        resources :order_items, only: %w[index]
      end
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
