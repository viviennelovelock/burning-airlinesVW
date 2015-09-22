# == Schema Information
#
# Table name: reservations
#
#  id         :integer          not null, primary key
#  row        :text
#  column     :text
#  user_id    :integer
#  flight_id  :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Reservation < ActiveRecord::Base
	belongs_to :flight
	belongs_to :user
end
