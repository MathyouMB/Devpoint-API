class CategoryFollow < ApplicationRecord
    belongs_to :category
    belongs_to :user
end
