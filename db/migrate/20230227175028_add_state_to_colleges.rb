class AddStateToColleges < ActiveRecord::Migration[7.0]
  def change
    add_column :colleges, :state, :string
  end
end
