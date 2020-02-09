class PostHasCategorys < ActiveRecord::Migration[6.0]
  def change
    add_reference :post_categories, :category, foreign_key: true
    add_reference :post_categories, :post, foreign_key: true
  end
end
