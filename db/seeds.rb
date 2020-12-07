# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Rails.application.eager_load!
ApplicationRecord.descendants.each { |model|
  # unless model == User
    model.delete_all
    ActiveRecord::Base.connection.reset_pk_sequence!(model.table_name)
    puts "The table #{model.table_name} is deleted !"
  # end
}

5.times do
  user = User.create! email: Faker::Internet.email, password: 'password'
  profile = Profile.create! first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, is_shopkeeper: false, user: user
end

3.times do
  user = User.create! email: Faker::Internet.email, password: 'password'
  profile = Profile.create! first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, is_shopkeeper: true, user: user
end

5.times do
  shops_category = ShopsCategory.create! title: Faker::JapaneseMedia::DragonBall.character
end

puts "The database is filled with a few records !"