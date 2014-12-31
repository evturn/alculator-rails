class Round < ActionController::Base

  def calculate()
    sex    = self.sex
    lbs    = self.lbs
    hours  = self.hours
    drinks = self.drinks
    abv    = self.abv

    rate = sex == "male" ? 0.73 : 0.66

    bev_oz = drinks * 12
    alc_oz = bev_oz * (abv * 0.01)

    step_1 = (alc_oz * 5.14)
    step_2 = (lbs * rate)
    step_3 = (step_1 / step_2)
    step_4 = (0.015 * hours)

    self.bac   = '%.2f' % (step_3 - step_4)

  end
end