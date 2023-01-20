# config/routes.rb
Rails.application.routes.draw do

  resources :applications, only: [:index,:destroy,:update]

  resources :colleges do 
    resources :applications, only: [:create,:index]
  end

  resources :users do 
    resources :applications, only: [:index,:show] 
  end


  get"/get-current-user", to: "sessions#get_current_user" 
  post"/login", to: "sessions#create"
  get '/all_colleges', to: 'colleges#get_colleges'

  match '*unmatched', to: 'application#not_found_method', via: :all

end