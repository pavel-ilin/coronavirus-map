class AddLatToProvince < ActiveRecord::Migration[6.0]
  def change
    add_column :provinces, :latitude, :float
    add_column :provinces, :longitude, :float
  end
end
