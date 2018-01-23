const Router = require('koa-router');
const router = new Router();
const User = require('../db/user');
const Group = require('../db/group');


module.exports = function(app) {
    router.get('/', (ctx) => {
        ctx.body = 'hello';
    });

    router.get('/user/:id', async (ctx) => {
        let user = await User.findById(ctx.params.id);
        ctx.body = user;
        ctx.status = 200;
    });

    router.post('/user', async (ctx) => {
        if(!ctx.request.body.mail || !ctx.request.body.groups) {
            ctx.status = 400;
        } else {
            switch(ctx.request.body.groups) {
                case 'students':
                    let studentsGroup = await Group.findOne({'groupName': 'students'});
                    let student = await User.create({
                        mail: ctx.request.body.mail,
                        name: ctx.request.body.name,
                        groups: studentsGroup._id
                    });
                    ctx.body = student;
                    ctx.status = 201;
                    break
                case 'teachers':
                    let teachersGroup = await Group.findOne({'groupName': 'teachers'});
                    let teacher = await User.create({
                        mail: ctx.request.body.mail,
                        name: ctx.request.body.name,
                        groups: teachersGroup._id
                    });
                    ctx.body = teacher;
                    ctx.status = 201;
                    break;
            }
        }
    });

    router.post('/group', async (ctx) => {
        if(!ctx.request.body.groupName) {
            ctx.status = 400;
        } else {
            let data = await Group.create({
                groupName: ctx.request.body.groupName
            });

            ctx.body = data;
            ctx.status = 201;
        }
    })





    router.put('/user:id', async (ctx) => {

    });


    router.delete('/user:id', async (ctx) => {

    });



    app.use(router.routes());
}