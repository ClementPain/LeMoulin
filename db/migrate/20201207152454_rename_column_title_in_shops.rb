class RenameColumnTitleInShops < ActiveRecord::Migration[6.0]
  def up
    rename_column :shops, :title, :name
    rename_column :shops, :is_ative, :is_active
    add_column :shops, :city, :string
  end

  def down
    rename_column :shops, :name, :title
    rename_column :shops, :is_active, :is_ative
    remove_column :shops, :city, :string
  end
end
