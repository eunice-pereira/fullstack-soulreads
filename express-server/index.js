require('dotenv').config();

const http = require('http');
const express = require('express');
const morgan = require('morgan');
const es6Renderer = require('express-es6-template-engine');

const app = express();
const server = http.createServer(app);
const logger = morgan('tiny');

const port = 5000;
const host = 'localhost';

const session = require('express-session');
const FileStore = require('session-file-store')(session);

// ROUTERS

const userRouter = require('./routers/user');
const bookRouter = require('./routers/book');
const memberRouter = require('./routers/member');
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
app.use('/api/user', userRouter);

// rednering book-activity routers
app.use('/api/books', bookRouter);

// rendering journal-activity routers
// app.use('/api/post', memberRouter);

//rendering post activity routers
app.use('/api/comment', commentRouter);

// rendering forum activity routers
app.use('/api/forum', forumRouter);

// rendering journal activity routers
app.use('/api/journal', journalRouter);

server.listen(port, host, () => {
	console.log(`Listening at http://${host}:${port}`);
});
