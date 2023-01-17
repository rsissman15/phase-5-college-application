class College < ApplicationRecord
    has_many :applications
    has many :users, through: :applications
end
