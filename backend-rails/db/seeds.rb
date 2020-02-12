require 'csv'
require 'rest-client'
require 'json'
require 'open-uri'
require "down"
require 'date'


def api_secret_google
  ENV["apikey"]
end

def api_secret_kaggel
  ENV["secret_kaggel"]
end

def dataset_downloading(path)
  api_data = {username: "pashuntiy", key: api_secret_kaggel}
  url = "https://#{api_data[:username]}:#{api_data[:key]}@www.kaggle.com/api/v1#{path}"

  tempfile = Down.open(url).read()
  file = CSV.parse(tempfile)
  reversed = file
end


def sorting_method
  raw_data = dataset_downloading('/datasets/download/sudalairajkumar/novel-corona-virus-2019-dataset/2019_nCoV_data.csv')
  raw_data.pop

  sorted_data = raw_data.sort_by{ |a|  a[1]}
  sorted_data.reverse
end

private

# Province.destroy_all
# Country.destroy_all

def initial_database_seed

    sorting_method().each { |n|

      if n[2] == nil
        n[2] = n[3]
      end

      if n[2] == 'Cruise Ship' || n[2] == 'Diamond Princess cruise ship'
        n[3] = n[2]
      end

      if n[3] == 'Mainland China'
        n[3] = 'China'
      end

      if n[3] == 'Country' || n[5] == '0.0' || n[3] == 'Cruise Ship'
        nil

      else

        country = Country.find_by(title: n[3])
            if country
                if n[2] == nil
                  province = country.provinces.find_by(title: n[3])
                else
                  province = country.provinces.find_by(title: n[2])
                end

                if province
                  nil

                elsif n[2] == 'Cruise Ship' || n[2] == 'Diamond Princess cruise ship'
                  province = country.provinces.find_by(title: n[3])
                  if province
                    nil
                  else
                    country.provinces.create(title: n[2], last_update: n[4], confirmed: n[5], deaths: n[6], recovered: n[7], latitude: 35.456817, longitude: 139.679733)
                  end
                else
                  if n[2] == nil
                    n[2] = n[3]
                    response = open("https://maps.googleapis.com/maps/api/geocode/json?address=#{n[3]}&key=#{api_secret_google}").read
                  else
                    response = open("https://maps.googleapis.com/maps/api/geocode/json?address=#{n[3]}+#{n[2]}&key=#{api_secret_google}").read
                  end
                  parsed_response = JSON.parse(response)
                  lat = parsed_response['results'][0]['geometry']['location']['lat']
                  lng = parsed_response['results'][0]['geometry']['location']['lng']
                  puts('province created')
                  country.provinces.create(title: n[2], last_update: n[4], confirmed: n[5], deaths: n[6], recovered: n[7], latitude: lat, longitude: lng)
                end

            else
                country = Country.create(title: n[3])

                if n[2] == nil
                  province = country.provinces.find_by(title: n[3])
                else
                  province = country.provinces.find_by(title: n[2])
                end


                if province
                  nil

                elsif n[2] == 'Cruise Ship' || n[2] == 'Diamond Princess cruise ship'
                  province = country.provinces.find_by(title: n[3])
                  if province
                    nil
                  else
                    country.provinces.create(title: n[2], last_update: n[4], confirmed: n[5], deaths: n[6], recovered: n[7], latitude: 35.456817, longitude: 139.679733)
                  end
                else
                  if n[2] == nil
                    n[2] = n[3]
                    response = open("https://maps.googleapis.com/maps/api/geocode/json?address=#{n[3]}&key=#{api_secret_google}").read
                  else
                    response = open("https://maps.googleapis.com/maps/api/geocode/json?address=#{n[3]}+#{n[2]}&key=#{api_secret_google}").read
                  end
                  parsed_response = JSON.parse(response)
                  lat = parsed_response['results'][0]['geometry']['location']['lat']
                  lng = parsed_response['results'][0]['geometry']['location']['lng']
                  puts('province created 2')
                  country.provinces.create(title: n[2], last_update: n[4], confirmed: n[5], deaths: n[6], recovered: n[7], latitude: lat, longitude: lng)
                end
            end
      end
    }
end

initial_database_seed()