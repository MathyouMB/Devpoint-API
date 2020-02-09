module Types
    class CategoryType < Types::BaseObject
      field :id, ID, null: false
      field :name, String, null: false
      field :description, String, null: false
      field :url, String, null: false
      field :users, [Types::UserType], null: true
      field :posts, [Types::PostType], null: true
    end
end