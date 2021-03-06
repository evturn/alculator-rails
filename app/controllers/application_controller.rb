class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def beer

    query = params['query'].gsub(' ', '+')
    url = "http://api.brewerydb.com/v2/search?q=#{query}&key=#{ENV['BREWERY_DB_KEY']}"
       
    beers = []
    response = HTTParty.get(url)
    results = response['data']
    results.map do |item|
      if item['type'] == 'beer'
        beers << item
      end
    end
    beer = beers.first
    respond_to do |f|
      f.html { render json: beer }
    end
  end

  def rounds
    round = Round.find params[:id]
    round.update_attributes params
    render :json => round
  end

 
end
