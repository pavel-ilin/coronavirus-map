require 'csv'
require 'rest-client'
require 'json'
require 'open-uri'
require "down"

def api_secret_google
  ENV["apikey"]
end

def api_secret_kaggel
  ENV["secret_kaggel"]
end

def dataset(path)
  api_data = {username: "pashuntiy", key: api_secret_kaggel}
  url = "https://#{api_data[:username]}:#{api_data[:key]}@www.kaggle.com/api/v1#{path}"

  tempfile = Down.open(url)
  file = tempfile.read()
end

dataset('/datasets/download/sudalairajkumar/novel-corona-virus-2019-dataset/2019_nCoV_data.csv')


# def update_database
#   raw_data = CSV.read("2019_nCoV_data.csv")
#     raw_data.shift
#
#     raw_data.each { |n|
#       country = Country.find_by(title: n[3])
#           if country
#             province = country.provinces.find_by(title: n[2])
#             if province
#               nil
#             else
#               if !n[2]
#                 n[2] = n[3]
#                 response = open("https://maps.googleapis.com/maps/api/geocode/json?address=#{n[3]}&key=#{api_secret_google}").read
#               else
#                 response = open("https://maps.googleapis.com/maps/api/geocode/json?address=#{n[3]}+#{n[2]}&key=#{api_secret_google}").read
#               end
#               parsed_response = JSON.parse(response)
#               lat = parsed_response['results'][0]['geometry']['location']['lat']
#               lng = parsed_response['results'][0]['geometry']['location']['lng']
#               country.provinces.create(title: n[2], last_update: n[4], confirmed: n[5], deaths: n[6], recovered: n[7], latitude: lat, longitude: lng)
#           end
#
#           else
#             country = Country.create(title: n[3])
#             province = country.provinces.find_by(title: n[2])
#             if province
#               nil
#             else
#               if !n[2]
#                 n[2] = n[3]
#                 response = open("https://maps.googleapis.com/maps/api/geocode/json?address=#{n[3]}&key=#{api_secret_google}").read
#               else
#                 response = open("https://maps.googleapis.com/maps/api/geocode/json?address=#{n[3]}+#{n[2]}&key=#{api_secret_google}").read
#               end
#               parsed_response = JSON.parse(response)
#               lat = parsed_response['results'][0]['geometry']['location']['lat']
#               lng = parsed_response['results'][0]['geometry']['location']['lng']
#               country.provinces.create(title: n[2], last_update: n[4], confirmed: n[5], deaths: n[6], recovered: n[7], latitude: lat, longitude: lng)
#             end
#           end
#     }
#
# end

private

# Province.destroy_all
# Country.destroy_all

# def initial_seed_data_csv
#   raw_data = CSV.read("2019_nCoV_data.csv")
#   raw_data.shift
#
#   raw_data.each { |n|
#
#     if !n[2]
#       n[2] = n[3]
#       response = open("https://maps.googleapis.com/maps/api/geocode/json?address=#{n[3]}&key=#{api_secret_google}").read
#     else
#       response = open("https://maps.googleapis.com/maps/api/geocode/json?address=#{n[3]}+#{n[2]}&key=#{api_secret_google}").read
#     end
#
#
#     parsed_response = JSON.parse(response)
#
#     if parsed_response['results'][0]
#       lat = parsed_response['results'][0]['geometry']['location']['lat']
#       lng = parsed_response['results'][0]['geometry']['location']['lng']
#     else
#       puts(parsed_response)
#       lat = 0.00
#       lng = 0.00
#     end
#
#     country = Country.find_by(title: n[3])
#     if country
#       province = country.provinces.find_by(title: n[2])
#       if province
#         nil
#       else
#         country.provinces.create(title: n[2], last_update: n[4], confirmed: n[5], deaths: n[6], recovered: n[7], latitude: lat, longitude: lng)
#     end
#
#     else
#       country = Country.create(title: n[3])
#       province = country.provinces.find_by(title: n[2])
#       if province
#         nil
#       else
#         country.provinces.create(title: n[2], last_update: n[4], confirmed: n[5], deaths: n[6], recovered: n[7], latitude: lat, longitude: lng)
#       end
#     end
#   }
# end
#
# initial_seed_data_csv()