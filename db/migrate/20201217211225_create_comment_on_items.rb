class CreateCommentOnItems < ActiveRecord::Migration[6.0]
  def up
    create_table :comment_on_items do |t|
      t.text :content
      t.belongs_to :item, index: true
      t.belongs_to :user, index: true

      t.timestamps
    end
  end

  def down
    drop_table :comment_on_items 
  end
end
