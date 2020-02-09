class User < ApplicationRecord
    has_many :posts
    has_many :category_follow
    has_many :posts, through: :category_follow
end
