module Mutations
    class FollowCategory < Mutations::BaseMutation
        description "have user follow a category"
        argument :user_id, Int, required: true
        argument :category_id, Int, required: true

        type Boolean

        def resolve(user_id:, category_id:) 
        
            user_of_request = User.find_by(id: user_id)
            category_of_request = Category.find_by(id: category_id)
        
            if user_of_request.nil?
                raise GraphQL::ExecutionError, "User does not exist"
            end

            if category_of_request.nil?
                raise GraphQL::ExecutionError, "category doesn't exist"
            end

            cf = CategoryFollow.create(
                user_id: user_of_request.id,
                category_id: category_of_request.id,
            )

            cf.save

        end
    end
end