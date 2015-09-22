Rails.application.routes.draw do

	root :to => 'static_pages#home'
	
  get 'static_pages/home'


  resources :reservations
  resources :users
  resources :flights
  resources :planes
end
