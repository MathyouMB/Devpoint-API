class Category < ApplicationRecord
    has_many :category_follows
    has_many :users, through: :category_follows
end
