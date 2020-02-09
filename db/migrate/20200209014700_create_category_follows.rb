class CreateCategoryFollows < ActiveRecord::Migration[6.0]
  def change
    create_table :category_follows do |t|

      t.timestamps
    end
  end
end
