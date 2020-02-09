module Mutations
    class AddPostToCategory < Mutations::BaseMutation
        description "add category to post"
        argument :post_id, Int, required: true
        argument :category_id, Int, required: true

        type Boolean

        def resolve(post_id:, category_id:) 
        
            post_of_request = Post.find_by(id: post_id)
            category_of_request = Category.find_by(id: category_id)
        
            if post_of_request.nil?
                raise GraphQL::ExecutionError, "post does not exist"
            end

            if category_of_request.nil?
                raise GraphQL::ExecutionError, "category doesn't exist"
            end

            pc = PostCategory.create(
                post_id: post_of_request.id,
                category_id: category_of_request.id,
            )

            pc.save

        end
    end
end