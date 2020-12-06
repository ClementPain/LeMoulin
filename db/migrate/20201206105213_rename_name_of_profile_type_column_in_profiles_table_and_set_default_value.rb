class RenameNameOfProfileTypeColumnInProfilesTableAndSetDefaultValue < ActiveRecord::Migration[6.0]
  def change
    rename_column :profiles, :profile_type, :role
    change_column_default :profiles, :role, 0
  end
end
