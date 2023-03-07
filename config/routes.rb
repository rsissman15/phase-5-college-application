Rails.application.routes.draw do

  resources :applications, only: [:index,:destroy,:update]

  resources :colleges do 
    resources :applications, only: [:create,:index]
  end

  resources :users do 
    resources :applications, only: [:index,:show] 
  end


  get"/get-current-user", to: "users#get_current_user" 
  post"/login", to: "sessions#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"
  
  


  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }


end