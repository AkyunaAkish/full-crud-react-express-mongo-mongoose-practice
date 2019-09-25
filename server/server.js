require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const compression = require('compression');
const cors = require('cors');
const helpers = require('../helpers');
const dev = process.env.NODE_ENV === 'development';

// API Route Files
const posts = require('./components/posts/posts');

const app = express();

app.use(cors());

// setup logs
app.use(logger('dev'));

app.use(logger('common'));

// compress all requests
app.use(compression());

// parse request to json
app.use(bodyParser.json({ 
	limit: '100mb', 
	type: 'application/json', 
	extended: true 
}));

app.use(bodyParser.urlencoded({
    extended: true,
    limit: '100mb'
}));

// serve static files
app.use(express.static(dev ? helpers.root('public') : helpers.root('build')));

// allows for setting/reading/editing/deleting cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

// to avoid IE API Call Caching
app.use((req, res, next) => {
    // Should work for detecting IE8+
    if (req.headers['user-agent'].includes('Trident')) {
        res.set({
            'Cache-Control': 'no-store, no-cache, must-revalidate',
            Pragma: 'no-cache',
            Expires: new Date('01.01.2000'),
        });
	}
	
    next();
});

// API endpoints:
app.use('/api/posts', posts);

app.all('*', (req, res, next) => {
	res.sendFile('index.html', {
		root: dev ? helpers.root('public') : helpers.root('build'),
	});
});

// // to generate new SECRET token uncomment:
// require('crypto').randomBytes(48, (err, buffer) => {
//     var token = buffer.toString('hex');
//     console.log('token: ', token);
// });

module.exports = app;
