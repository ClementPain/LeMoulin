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
  profile = user.profile.update(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, is_shopkeeper: false, user: user)
end

3.times do
  user = User.create! email: Faker::Internet.email, password: 'password'
  profile = user.profile.update(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, is_shopkeeper: true, user: user)
end

5.times do
  shop_category = ShopCategory.create! title: Faker::JapaneseMedia::DragonBall.character
end

shopId = 0
3.times do
  shop = Shop.create!(
    name: Faker::Creature::Cat.name,
    description: Faker::Superhero.descriptor,
    address: Faker::Address.street_address,
    zip_code: Faker::Address.zip_code, 
    city: Faker::Address.city, 
    siret: '000000000', 
    is_active: true, 
    shopkeeper_id: Profile.select{ |profile| profile.is_shopkeeper === true}[shopId].user_id
  )

  shop_categories_join = ShopCategoriesJoin.create!(
    shop_id: shop.id,
    shop_category_id: ShopCategory.all.sample.id
  )
  
  shopId += 1
end

puts "The database is filled with a few records !"