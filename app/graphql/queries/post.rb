module Queries
    class Post < Queries::BaseQuery
      description 'Get a Post by id'
      argument :id, ID, required: true  

      type Types::PostType, null: false
  
      def resolve(id:)
        ::Post.find(id)
      end
    end
end