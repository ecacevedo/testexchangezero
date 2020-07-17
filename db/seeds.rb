# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Category.destroy_all
Item.destroy_all


user = User.create!(username: 'estevan', password: 'abc123')

bedroom = Category.create!(category_name: 'bedroom' )
kitchen = Category.create!(category_name: 'kitchen' )
livingroom = Category.create!(category_name: 'livingroom' )
homeoffice = Category.create!(category_name: 'homeoffice' )
dining = Category.create!(category_name: 'dining' )
laundry = Category.create!(category_name: 'laundry' )
babyroom = Category.create!(category_name: 'babyroom')
outdoor = Category.create!(category_name: 'outdoor' )
business = Category.create!(category_name: 'business' )
bathroom = Category.create!(category_name: 'bathroom' )

lamp = Item.create!(item_name: 'lamp', locationdetails: 'Mesa, Arizona', image_url: 'https://images.unsplash.com/photo-1542728928-1413d1894ed1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1275&q=80', user_id: user.id)

lamp.categories.push(bedroom, livingroom, homeoffice, business)

kitchentable = Item.create!(item_name: 'Kitchen Table', locationdetails: 'Brooklyn, New York', image_url: 'https://images.unsplash.com/photo-1593136596203-7212b076f4d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80', user_id: user.id)

kitchentable.categories.push(kitchen, dining)


washermachine = Item.create!(item_name: 'Washer Machine', locationdetails: 'Queens, New York', image_url: 'https://images.unsplash.com/photo-1585314293845-4db3b9d0c6e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80', user_id: user.id)

washermachine.categories.push(laundry)

crib = Item.create!(item_name: 'crib', locationdetails: 'Bronx, New York', image_url: 'https://images.unsplash.com/photo-1588854337127-a7cdcabfd7ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80', user_id: user.id)

crib.categories.push(babyroom, bedroom)

grill = Item.create!(item_name: 'grill', locationdetails: 'Scottsdale, Arizona', image_url: 'https://images.unsplash.com/photo-1458130713137-8b7237fb3648?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80', user_id: user.id)

grill.categories.push(outdoor)