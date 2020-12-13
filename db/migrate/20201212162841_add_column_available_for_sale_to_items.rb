class AddColumnAvailableForSaleToItems < ActiveRecord::Migration[6.0]
  def up
    add_column :items, :is_available_for_sale, :boolean, default: true
  end

  def down
    remove_column :items, :is_available_for_sale, :boolean, default: true
  end
end
