class Place < ActiveRecord::Base
	extend Geocoder::Model::ActiveRecord 

	validates :name, :address, presence: true
	geocoded_by :address
	after_validation :geocode, :if => :address_changed?
	reverse_geocoded_by :latitude, :longitude
	after_validation :reverse_geocode
end
