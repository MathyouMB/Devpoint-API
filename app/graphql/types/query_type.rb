module Types
  class QueryType < Types::BaseObject
    field :users, resolver: Queries::Users
    field :categories, resolver: Queries::Categories
    field :posts, resolver: Queries::Posts
    field :posts_by_category, resolver: Queries::PostsByCategory
  end
end
