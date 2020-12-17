class AddCoordinatesToShops < ActiveRecord::Migration[6.0]
  def up
    add_column :shops, :latitude, :float
    add_column :shops, :longitude, :float
  end

  def down
    remove_column :shops, :latitude, :float
    remove_column :shops, :longitude, :float
  end
end
