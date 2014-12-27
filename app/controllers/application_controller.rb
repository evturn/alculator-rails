class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def index

    query = params['query']
    url = "http://api.brewerydb.com/v2/search?q=#{query}&key=#{ENV['BREWERY_DB_KEY']}"
    response = HTTParty.get(url)

  end
  
end
