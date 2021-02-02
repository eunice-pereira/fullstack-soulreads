require('dotenv').config();

const http = require('http');
const express = require('express');
const morgan = require('morgan');
const es6Renderer = require('express-es6-template-engine');

const app = express();
const server = http.createServer(app);
const logger = morgan('tiny');

const port = 3003;
const host = 'localhost';

const session = require('express-session');
const FileStore = require('session-file-store')(session);

// routers

// const memberRouter = require('./routers/member');
const userRouter = require('./routers/user');
const bookRouter = require('./routers/book');
const memberRouter = require('./routers/member');

app.use(logger);
app.use(express.static('./public'));
app.use(
	express.urlencoded({
		extended: true,
	})
);

// HTML template engine
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

app.use(
	session({
		store: new FileStore({
			logFn: function () {},
		}),
		secret: process.env.SESSION_SECRET,
		saveUninitialized: false,
		resave: true,
		rolling: true,
		cookie: {
			maxAge: 1000 * 60 * 60 * 24 * 7,
		},
	})
);

// rendering user-account activity routers
app.use('/', userRouter);

// rednering book-activity routers
app.use('/', bookRouter);

// rendering journal-activity routers
app.use('/post', memberRouter);

server.listen(port, host, () => {
	console.log(`Listening at http://${host}:${port}`);
});
