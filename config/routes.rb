# config/routes.rb
Rails.application.routes.draw do
  resources :colleges
  resources :users
  # route to test your configuration
  get '/all_colleges', to: 'colleges#get_colleges'
end