class AddColumnImageToItems < ActiveRecord::Migration[6.0]
  def up
    add_column :items, :images, :string, array: true, default: []
  end

  def down
    remove_column :items, :images, :string, array: true, default: []
  end
end
