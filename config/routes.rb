Rails.application.routes.draw do
  
  resources :users
  resources :categories
  resources :items
 
  resources :users do
    resources :categories do

    
    resources :items
    end
  end

  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'

  get '/items/:item_id/category/:id/', to:
  'categories#add_item_category'



  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
