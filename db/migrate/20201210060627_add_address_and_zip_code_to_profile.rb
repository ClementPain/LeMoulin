class AddAddressAndZipCodeToProfile < ActiveRecord::Migration[6.0]
  def change
    add_column :profiles, :address, :string
    add_column :profiles, :zip_code, :string
  end
end
