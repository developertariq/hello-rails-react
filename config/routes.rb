Rails.application.routes.draw do
  namespace :api do
    get '/', to: 'greetings#random'
    resources :greetings, only: [:random]
  end

  root 'root#index'
end
