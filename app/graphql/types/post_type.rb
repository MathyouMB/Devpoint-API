module Types
    class PostType < Types::BaseObject
      field :id, ID, null: false
      field :name, String, null: false
      field :url, String, null: false
      field :posttype, String, null: false
      field :user, Types::UserType, null: true
      field :categories, [Types::CategoryType], null: true
    end
end