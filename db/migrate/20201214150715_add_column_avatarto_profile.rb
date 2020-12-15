class AddColumnAvatartoProfile < ActiveRecord::Migration[6.0]
  def up
    add_column :profiles, :avatar, :string, default: 'https://res.cloudinary.com/dhtysnpro/image/upload/v1607957682/samples/animals/cat.jpg'
  end

  def down
    remove_column :profiles, :avatar, :string, default: 'https://res.cloudinary.com/dhtysnpro/image/upload/v1607957682/samples/animals/cat.jpg'
  end
end
