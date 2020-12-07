class ChangeColumnTypeProfile < ActiveRecord::Migration[6.0]
  def up
    remove_column :profiles, :role, :integer
    add_column :profiles, :is_shopkeeper, :boolean, default: false
  end

  def down
    add_column :profiles, :role, :integer
    remove_column :profiles, :is_shopkeeper, :boolean, default: false
  end
end
