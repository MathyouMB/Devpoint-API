module Types
  class QueryType < Types::BaseObject
    field :users, resolver: Queries::Users
    field :categories, resolver: Queries::Categories
    field :posts, resolver: Queries::Posts
  end
end
