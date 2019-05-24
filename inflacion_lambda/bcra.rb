#!/usr/bin/ruby

require 'aws-sdk-s3'
require 'httparty'

def save_json(type, response)
  # File.open("#{type}.json", 'w') { |file| file.write(response) }
  s3 = Aws::S3::Resource.new
  s3.bucket('sueldohoy').object(type.to_s).put(
    body: response.body,
    acl: 'public-read'
  )
end

def query_bcra(*)
  token = # Get access token from https://estadisticasbcra.com/api/registracion
    %i[usd usd_of cer uva uvi].each do |type|
      response = HTTParty.get(
        "https://api.estadisticasbcra.com/#{type}",
        headers: { 'Authorization' => "Bearer #{token}" }
      )
      save_json(type, response)
    end
  { statusCode: 200 }
end
