module Types
  class MutationType < Types::BaseObject
    field :follow_category, mutation: Mutations::FollowCategory
    field :create_post, mutation: Mutations::CreatePost
    field :add_post_to_category, mutation: Mutations::AddPostToCategory
  end
end
