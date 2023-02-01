class ApplicationSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :major, :application_deadline, :file_data
  has_one :user
  has_one :college

  # def file_data
  #   rails_blob_path(object.file_data, only_path: true) if object.file_data.attached?
  # end
end
