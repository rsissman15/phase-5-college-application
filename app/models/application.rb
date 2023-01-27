class Application < ApplicationRecord
  belongs_to :user
  belongs_to :college


  validates_presence_of :name,:location,:application_deadline,:major
  validates :name, uniqueness: { scope: :user_id, message:":You already have an application for this school"}
  validate :application_deadline_date_cannot_be_in_the_past

  def application_deadline_date_cannot_be_in_the_past
    if application_deadline < Date.today
      errors.add(:application_deadline, "can't be in the past")
    end
  end  

end
