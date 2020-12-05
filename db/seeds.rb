# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Profile.delete_all
User.delete_all

5.times do
  user = User.create! email: Faker::Internet.email, password: 'password'
  profile = Profile.create! first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, profile_type: 'client', user_id: user.id
end

3.times do
  user = User.create! email: Faker::Internet.email, password: 'password'
  profile = Profile.create! first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, profile_type: 'shopkeeper', user_id: user.id
end

user = User.create! email: 'admin@admin.admin', password: 'password'
profile = Profile.create! first_name: 'admin', last_name: 'admin', profile_type: 'admin', user_id: user.id