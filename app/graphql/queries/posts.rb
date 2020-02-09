module Queries
    class Posts < Queries::BaseQuery
      description 'Get all Posts'
  
      type [Types::PostType], null: false
  
      def resolve()
        ::Post.all
      end
    end
end