class AddColumnImageToShops < ActiveRecord::Migration[6.0]
  def up
    add_column :shops, :image, :string, default: ""
  end

  def down
    remove_column :shops, :image, :string, default: ""
  end
end
