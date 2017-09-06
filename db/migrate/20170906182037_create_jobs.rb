class CreateJobs < ActiveRecord::Migration[5.1]
  def change
    create_table :jobs do |t|
      t.string :title
      t.string :snippet
      t.string :link
      t.integer :likes, default: 0
      t.string :cacheId
      t.timestamps
    end
  end
end
