Rails.application.routes.draw do
  root          to: 'application#index'
  get '/beers'   => 'application#beer'
  post '/rounds' => 'application#rounds'
end
