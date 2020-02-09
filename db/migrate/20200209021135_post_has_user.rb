class PostHasUser < ActiveRecord::Migration[6.0]
  def change
    add_reference :posts, :user, foreign_key: true

    add_reference :category_follows, :user, foreign_key: true
    add_reference :category_follows, :category, foreign_key: true

    add_reference :post_tags, :post, foreign_key: true
    add_reference :post_tags, :tag, foreign_key: true
  end
end
