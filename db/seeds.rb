# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

u1 = User.create!(
    username: "matthew",
    email: "matt@email.com",
    password: "123"
) 

u2 = User.create!(
    username: "iain",
    email: "iain@email.com",
    password: "123"
) 

u3 = User.create!(
    username: "tiffany",
    email: "tif@email.com",
    password: "123"
) 

c1 = Category.create!(
    name: "HTML",
    description: "used for making websites ...",
) 

c2 = Category.create!(
    name: "CSS",
    description: "used for making websites ...",
) 

c3 = Category.create!(
    name: "JavaScript",
    description: "used for making websites ...",
) 

c4 = Category.create!(
    name: "React",
    description: "used for making websites ...",
) 

c5 = Category.create!(
    name: "Vue",
    description: "used for making websites ...",
) 

c6 = Category.create!(
    name: "Angular",
    description: "used for making websites ...",
) 


10.times do
    Post.create!(
        name: Faker::Lorem.word,
        description: Faker::Lorem.sentence,
        url: Faker::Internet.url,
        posttype: "video",
        user_id: u1.id,
    )
end


10.times do
    Post.create!(
        name: Faker::Lorem.word,
        description: Faker::Lorem.sentence,
        url: Faker::Internet.url,
        posttype: "article",
        user_id: u2.id,
    )
end


