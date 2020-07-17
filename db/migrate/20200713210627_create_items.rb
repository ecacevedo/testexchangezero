class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
      t.string :item_name
      t.string :locationdetails
      t.string :image_url
      t.string :user_id

      t.timestamps
    end
  end
end
