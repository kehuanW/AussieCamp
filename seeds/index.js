const mongoose = require("mongoose")
const Campground = require('../models/campground');
const { descriptors, places } = require('./seedHelpers')
const cities = require('./cities')
const imagesList = require('./images')

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)]

const seedDB = async () => {
    await Campground.deleteMany({})

    for (let i = 0; i < 400; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const random27_1 = Math.floor(Math.random() * 27);
        const random27_2 = Math.floor(Math.random() * 27);
        const price = Math.floor(Math.random() * 20) + 10
        const c = new Campground({
            author: '62ca2c663c16572319b7a7bc',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            // image: "https://source.unsplash.com/collection/483251",
            description: "Every state and territory is home to a diverse range of rich scenic grandeur, ready to inspire and excite you. In one of our largest-ever polls, we asked the Australian Traveller community to vote for their all-time favourite views around the country.Among the readers, tourism operators, local and international travellers, the nominations were eye-wateringly beautiful, and we knew condensing them to 100 would be quite the difficult task. After much deliberation, here are the 100 Best Views in Australia. Enjoy!",
            price,
            geometry: {
                type: "Point",
                coordinates: [
                    cities[random1000].longitude,
                    cities[random1000].latitude,
                ]
            },
            // images: [
            //     {
            //         url: 'https://res.cloudinary.com/dhzkes0sy/image/upload/v1657545870/YelpCamp/c5jnhqubfvbzblkzglje.jpg',
            //         filename: 'YelpCamp/c5jnhqubfvbzblkzglje'
            //     },
            //     {
            //         url: 'https://res.cloudinary.com/dhzkes0sy/image/upload/v1657545872/YelpCamp/hxkhxkrnf5w8k30klcsh.jpg',
            //         filename: 'YelpCamp/hxkhxkrnf5w8k30klcsh'
            //     }
            // ]
            images: [
                {
                    url: imagesList[random27_1].url,
                    filename: imagesList[random27_1].filename
                },
                {
                    url: imagesList[random27_2].url,
                    filename: imagesList[random27_2].filename
                }
            ]
        })
        await c.save()
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})

