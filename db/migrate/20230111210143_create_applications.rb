class CreateApplications < ActiveRecord::Migration[7.0]
  def change
    create_table :applications do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :college, null: false, foreign_key: true
      t.string :name
      t.string :location
      t.string :major
      t.date :application_deadline

      t.timestamps
    end
  end
end
