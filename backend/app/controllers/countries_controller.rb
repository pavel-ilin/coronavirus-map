class CountriesController < ApplicationController

  def index
    countries = Country.all
    render json: countries
  end
end
