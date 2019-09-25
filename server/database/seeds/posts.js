// to run seed file
// go to terminal and run
// $ node server/database/seeds/posts.js
require('dotenv').config();

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.Promise = global.Promise;

// loading the post model to register 
// before referencing the post model
require('../models/post');

const Post = mongoose.model('post');

const postSeeds = [
    {
        title: 'Mongoose is the one',
        author: 'Neo',
        content: 'Use mongoose, it is the best',
        date: new Date(),
    },
];

const seedPosts = () => {
    const promises = [];

    postSeeds.forEach((post) => {
       promises.push(new Post(post).save());
    });

    return Promise.all(promises);
};

return seedPosts()
            .then((d) => {
                console.log('seeded:', d);
                process.exit(); 
            })
            .catch((e) => {
                console.error('seed error:', e);
                process.exit();
            });