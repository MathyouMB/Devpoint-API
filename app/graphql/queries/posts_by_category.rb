module Queries
    class PostsByCategory < Queries::BaseQuery
      description 'Get a Posts by category'
      argument :category_id, ID, required: true  

      type [Types::PostType], null: false
  
      def resolve(category_id:)

        sql = "select *
        from posts JOIN post_categories
        ON posts.id = post_categories.post_id where post_categories.category_id = '#{category_id}';" 

        records_array = ActiveRecord::Base.connection.execute(sql)
        
      end
    end
end