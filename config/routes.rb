Rails.application.routes.draw do
  root         to: 'application#index'
  get '/beers' => 'application#beer'
  get '/rounds' => 'application#alculator'
end
