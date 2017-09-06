class UpdateJobLikes < ActiveRecord::Migration[5.1]
  def change
    change_column :joblikes, :likeCounter, :integer, :default => 0
  end
end
