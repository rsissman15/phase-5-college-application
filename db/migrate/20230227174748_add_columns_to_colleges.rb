class AddColumnsToColleges < ActiveRecord::Migration[7.0]
  def change
    add_column :colleges, :alpha_two_code, :string
    add_column :colleges, :domains, :string
  end
end
