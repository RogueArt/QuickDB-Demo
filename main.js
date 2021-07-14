const db = require('quick.db')

// Load our JSON data
const restaurantData = require('./restaurant-data.json')
const schoolData = require('./school-data.json')

async function main() {
  // Add the school data synchronously to our json.sqlite file
  db.set('school-data', schoolData)

  // Get the data (asynchronous operation)
  const questionOne = await db.get('test.quiz.sport.q1')

  // Log the question
  console.log(questionOne)

  // Add the restaurant data synchronously to our json.sqlite file
  db.set('restaurant-data', restaurantData)

  // Grab the first item from our array
  const firstRestaurant = await db.get('restaurant-data.0')

  // Log the first restaurant
  console.log(firstRestaurant)

  // Grab the first five items of our array asynchronously
  const firstFiveRestaurants = []
  for (let x = 0; x < 5; x += 1) {
    firstFiveRestaurants.push(await db.get(`restaurant-data.${x}`))
  }

  // Log the first five restaurants
  console.log(firstFiveRestaurants)
}

main()
