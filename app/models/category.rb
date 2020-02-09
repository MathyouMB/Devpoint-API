class Category < ApplicationRecord
    has_many : category_follow
    has_many :users, through: :category_follow
end
