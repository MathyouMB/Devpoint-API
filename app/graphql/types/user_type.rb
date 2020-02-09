module Types
    class UserType < Types::BaseObject
      field :id, ID, null: false
      field :username, String, null: false
      field :email, String, null: false
      field :posts, [Types::PostType], null: true
      field :categories, [Types::CategoryType], null: true
    end
end