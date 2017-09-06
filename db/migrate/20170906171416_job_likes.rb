class JobLikes < ActiveRecord::Migration[5.1]
  def change
    create_table :joblikes do |t|
      t.integer :jobId
      t.integer :likeCounter
    end
  end
end
