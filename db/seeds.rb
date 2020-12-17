# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

create_orders = false

if create_orders
  user = User.last

  ['in_progress', 'prepared', 'validated', 'canceled'].each do |status|
    3.times do
      shop = Shop.all.sample
      items = shop.items
      
      order_items = []
      3.times do
        order_items << OrderItem.new(item: items.sample, quantity: Faker::Number.within(range: 1..10))
      end
      
      Order.create(customer: user, shop: shop, order_items: order_items, status: status)
    end
  end
  
  puts "The database is filled with a few orders attached to #{user.email} with success !"
else 
  Rails.application.eager_load!
  ApplicationRecord.descendants.each { |model|
    model.delete_all
    ActiveRecord::Base.connection.reset_pk_sequence!(model.table_name)
    puts "The table #{model.table_name} is deleted !"
  }

  puts 'All the tables was deleted !'

  5.times do
    user = User.create email: Faker::Internet.email, password: 'password'
    profile = user.profile.update(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name)
  end

  3.times do
    user = User.create! email: Faker::Internet.email, password: 'password'
    profile = user.profile.update(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name)
  end

  shop_category_1 = ShopCategory.create! title: "Epicerie"
  shop_category_2 = ShopCategory.create! title: "Habillement"
  shop_category_3 = ShopCategory.create! title: "Jeux"
  shop_category_4 = ShopCategory.create! title: "Chocolatier"
  shop_category_5 = ShopCategory.create! title: "Boulangerie-Patisserie"
  shop_category_6 = ShopCategory.create! title: "Serrurrier"
  shop_category_7 = ShopCategory.create! title: "Santé-Hygiène"
  shop_category_8 = ShopCategory.create! title: "Cordonnerie"
  shop_category_9 = ShopCategory.create! title: "Jardinerie"
  shop_category_10 = ShopCategory.create! title: "Musique"

  shopId = 0

  shop1 = Shop.create!(
    name: 'Aberak',
    description: 'épicerie (alimentation au détail)',
    address: '51 rue Jean Jaurès',
    zip_code: '92300', 
    city: 'Levallois-Perret', 
    siret: '000000000', 
    is_active: true, 
    shopkeeper: (User.select {|user| !user.has_a_shop}).sample,
    shop_categories: [shop_category_1] 
  )

  # ShopCategoriesJoin.create!( shop_id: shop1.id, shop_category_id: shop_category_1.id )

  puts 'A shop is created'

  shopId += 1

  Item.create!(
    name: 'Tomates des Pouilles pelées à la main 550 gr',
    description: "Ces Pomodori pelati sont des tomates pelées à la main. Une spécialité typique, 100% naturelle et artisanale, sans aucun ajout de sel, sucre ou correcteur d'acidité. On pèle à la main 'i pomodori della Daunia' : une sélection de bonnes tomates mûres et juteuses de la région de la Valle d’Ofanto, dans les Pouilles.",
    price: 5.50,
    stock: 2,
    shop_id: shop1.id
  )

  puts 'An item is created'

  Item.create!(
    name: 'Crème Parmesan Reggiano et truffe 80 gr',
    description: "C'est une crème raffinée au fromage Parmigiano DOP et à la truffe estivale (dite aussi truffe de Saint Jean). Le mariage parmesan/truffe est un régal à l'apéritif sur des Crostini ou Bruschette de pain mais également en accompagnement d'omelette, pâtes, risotto, etc.",
    price: 10.40,
    stock: 1,
    shop_id: shop1.id
  )

  puts 'An item is created'
    
  Item.create!(
    name: "Huile d'olive 'Bella di Cerignola' 50 cl",
    description: "Cette huile d'olive est rare : elle est extraite des olives de la variété ovale géante 'Bella di Cerignola' et de la variété Coratina, deux célèbres types d'olives de la région du Nord des Pouilles. Les olives sont cueillies à la main en novembre. C'est une huile fruitée, douce et équilibrée : parfaite pour toutes les spécialités de la gastronomie italienne.",
    price: 14.50,
    stock: 8,
    shop_id: shop1.id
  )

  puts 'An item is created'

  shop2 = Shop.create!(
    name: 'Le Koncept',
    description: "Concept store en commerce de détail d'habillement, accessoires, cosmétiques et décorations en magasin spécialisé. Commerce de détail de biens neufs et d'occasions. Expositions, ateliers et dégustations boissons non alcoolisées et épicerie fine. Expositions artistiques et artisanales, ateliers et dégustations boissons non alcoolisées et épicerie fine, commerce de détail de fleurs séchées, terrariums. Import-Export",
    address: '89 rue de la scellerie',
    zip_code: '37000',
    city: 'Tours',
    siret: '0000000000',
    is_active: true,
    shopkeeper: (User.select {|user| !user.has_a_shop}).sample,
    shop_categories: [shop_category_2, shop_category_8]
  )

  # ShopCategoriesJoin.create!( shop_id: shop2.id, shop_category_id: shop_category_2.id )
  # ShopCategoriesJoin.create!( shop_id: shop2.id, shop_category_id: shop_category_8.id )

  puts 'A shop is created'

  shopId += 1

  Item.create!(
    name: "Ascagne",
    description: "Le modèle que nous vous présentons, classique et original, vous « habillera » confortablement et avec élégance cet hiver.
    Le dessus bi-matières vous offre un supplément d'aisance et de confort et le dessin des surpiqures un supplément esthétique fort agréable.",
    price: 39.50,
    stock: 2,
    shop_id: shop2.id
  )

  puts 'Create the fourth item'

  Item.create!(
    name: "Merapi",
    description: "C'est une sandale légère, agréable au pied et idéale pour une marche
    souple en toute aisance.
    Sa semelle douce, avec première cuir, vous chausse parfaitement et la bride cheville avec attache velcro s'adapte à votre morphologie.",
    price: 59.00,
    stock: 4,
    shop_id: shop2.id
  )

  puts 'An item is created'

  Item.create!(
    name: "Alzarine",
    description: "Nous présentons une adorable chaussure qui est une composition de différents tons de gris et qui porte sur l'extérieur quelques étoiles glitter … grises.
    Pied maintenu , lacets « velours », confort et esthétique et toujours la qualité de la marque ASSO.",
    price: 37.50,
    stock: 1,
    shop_id: shop2.id
  )

  puts 'An item is created'

  shop3 = Shop.create!(
    name: 'Oxybul',
    description: "Oxybul vous propose des jouets d'éveil, jeux pour apprendre, jeux de société, jeux d'imagination, déguisements, articles de loisirs créatifs, jeux de plein air, livres et produits multimédias.",
    address: '13 rue de la visitation',
    zip_code: '35000', 
    city: 'Rennes', 
    siret: '000000000', 
    is_active: true, 
    shopkeeper: (User.select {|user| !user.has_a_shop}).sample,
    shop_categories: [shop_category_3]
  )

  # ShopCategoriesJoin.create!( shop_id: shop3.id, shop_category_id: shop_category_3.id )

  puts 'A shop is created'

  shopId += 1

  Item.create!(
    name: "Table d'activités ",
    description: "Une installation rapide pour des heures de jeu et de découvertes, c'est ce que propose cette table d'activités ! Avant de la découvrir, votre bébé peut commencer par manipuler et explorer séparément les cubes et les animaux en bois. Les graphismes variés stimulent sa vue. Prêt ? En choisissant son aire de jeu, il découvre en autonomie trois formes d'animaux à encastrer, des engrenages en plastique souple à faire tourner, un soleil et un nuage à déplacer dans l'arc-en-ciel, un labyrinthe à perles, une petite voiture à faire circuler et quatre cubes à empiler. Chaque activité développe sa motricité fine, éveille ses sens et lui fait comprendre l'effet de ses actions. Le petit plus ? Les espaces de jeu séparés par l'arc-en-ciel permettent à deux enfants de jouer en même temps. ",
    price: 59.99,
    stock: 1,
    shop_id: shop3.id
  )

  puts 'An item is created'

  Item.create!(
    name: "Déguisement Cléopatre 8-10 ans",
    description: "Vêtue de cette belle robe blanche à plastron, d'une ceinture dorée et pailletée, et aussi coiffée d'une couronne ornée de pierres précieuses, la petite Cléopâtre découvre l'Égypte Antique. Elle imagine les aventures vécues par la Reine du Nil.",
    price: 27.99,
    stock: 5,
    shop_id: shop3.id
  )

  puts 'An item is created'

  Item.create!(
    name: "Jeu de société Le jeu du loup",
    description: "Le but du jeu est de partir en cueillette dans les bois et de finir avant que le loup ne soit tout habillé. Loup y es-tu ? Non, je mets ma chemise, etc. Le loup s'habille donc au fur et à mesure de la partie. Entre lui et les enfants, le gagnant sera le plus rapide. Pour jouer, il suffit de piocher à tour de rôle. Quand la tête du loup paraît, les enfants lui ajoutent un vêtement et entonnent la chanson : promenons-nous dans les bois... Le frisson s'installe. Un jeu convivial, à mener ensemble ou seul contre le loup.",
    price: 37.50,
    stock: 3,
    shop_id: shop3.id
  )

  puts 'An item is created'

  puts "The database is filled with a few records with success !"
end
