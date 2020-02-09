class User < ApplicationRecord
    has_many :posts
    has_many :category_follows
    has_many :categories, through: :category_follows
end
