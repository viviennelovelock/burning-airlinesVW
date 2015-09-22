Rails.application.routes.draw do

  get 'session/new'

	root :to => 'static_pages#home'

  resources :reservations
  resources :users
  resources :flights
  resources :planes

 get '/login' => 'session#new'
 post '/login' => 'session#create'
 delete '/login' => 'session#destroy'

  get '/search' => 'pages#search'
end
