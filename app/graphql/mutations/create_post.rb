module Mutations
    class CreatePost < Mutations::BaseMutation
      argument :user_id, Int, required: true
      argument :name, String, required: true
      argument :description, String, required: true
      argument :url, String, required: true
      argument :posttype, String, required: true

      type Types::PostType
  
      def resolve(user_id: nil, name: nil, description: nil, url: nil, posttype: nil) 

        post = Post.create(
          name: name,
          description: description,
          url: url,
          posttype: posttype,
          user_id: user_id
        )
        
        raise GraphQL::ExecutionError, board.errors.full_messages.join(", ") unless post.errors.empty?
        
        post

      end
    end
  end