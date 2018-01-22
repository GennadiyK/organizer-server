const Router = require('koa-router');
const router = new Router();
const Todo = require('../db/todo');

module.exports = function(app) {
    router.get('/', (ctx, next) => {
        ctx.body = 'hello';
    });

    router.get('/todo/all', async (ctx) => {
        let data = await Todo.find({});
        ctx.body = data;
        ctx.status = 201;
    });

    router.post('/todo', async (ctx) => {
        if(!ctx.request.body.taskTitle || !ctx.request.body.taskText) {
            ctx.status = 400;
        } else {
            let data = await Todo.create({
                taskTitle: ctx.request.body.taskTitle,
                taskText:  ctx.request.body.taskText
            });

            ctx.body = data;
            ctx.status = 201;
        }
    });

    router.put('/todo:id', async (ctx) => {

    });


    router.delete('/todo:id', async (ctx) => {

    });



    app.use(router.routes());
}