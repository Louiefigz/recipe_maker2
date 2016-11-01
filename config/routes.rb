Rails.application.routes.draw do
  get 'home/index'

    resources :recipes
    resources :ingredients
    resources :categories

  put 'recipes/:id/destroy_join', to: 'recipes#destroy_join'

    root 'home#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
