class Rounds < ApplicationController

def rounds
  render :json => Round.all
end

end