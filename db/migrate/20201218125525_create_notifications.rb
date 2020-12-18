class CreateNotifications < ActiveRecord::Migration[6.0]
  def up
    create_table :notifications do |t|
      t.text :message
      t.boolean :read, default: false
      t.boolean :for_shopkeeper, default: false
      t.belongs_to :user, index: true

      t.timestamps
    end
  end

  def down
    drop_table :notifications
  end
end
