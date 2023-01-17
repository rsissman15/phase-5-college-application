class ApplicationSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :major, :application_deadline
  has_one :user
  has_one :college
end
