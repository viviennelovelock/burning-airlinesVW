Rails.application.routes.draw do
  resources :reservations
  resources :users
  resources :flights
  resources :planes

  get '/search' => 'pages#search'
end
