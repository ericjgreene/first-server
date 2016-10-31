require 'httparty'

url = 'http://localhost:4567'

response = HTTParty.get(url)

puts response
