require('dotenv').config();

const http = require('http');
const express = require('express');
const morgan = require('morgan');

const app = express();
const server = http.createServer(app);
const logger = morgan('dev');

const port = 5000;
const host = 'localhost';

const session = require('express-session');
const FileStore = require('session-file-store')(session);

// ROUTERS
const userRouter = require('./routers/user');
const bookRouter = require('./routers/book');
const commentRouter = require('./routers/comment');
const forumRouter = require('./routers/forum');
const journalRouter = require('./routers/journal');

app.use(logger);
app.use(express.json());
app.use(
	express.urlencoded({
		extended: true,
	})
);

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

// user-account activity routers
app.use('/api/user', userRouter);

// book-activity routers
app.use('/api/book', bookRouter);

// comment posted in forum routers
app.use('/api/comment', commentRouter);

// forum activity routers
app.use('/api/forum', forumRouter);

// journal activity routers
app.use('/api/journal', journalRouter);

server.listen(port, host, () => {
	console.log(`Listening at http://${host}:${port}`);
});
