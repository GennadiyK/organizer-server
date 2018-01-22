const Koa = require('koa');
const app = new Koa();
const {serverPort} = require('./config.json');
const path = require('path');
const fs = require('fs');
const todoController = require('./src/controllers/todoController');

const handlers = fs.readdirSync(path.join(__dirname, 'src', 'handlers')).sort();

handlers.forEach((handler) => {
    return require('./src/handlers/' + handler).init(app);
});

todoController(app);

app.listen(serverPort);