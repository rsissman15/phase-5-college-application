class CreateColleges < ActiveRecord::Migration[7.0]
  def change
    create_table :colleges do |t|
      t.string :web_pages
      t.string :name
      t.string :country

      t.timestamps
    end
  end
end
