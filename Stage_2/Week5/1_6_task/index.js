const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');


const app = new Koa();
const router = new Router();

router.prefix('/api');
router.post('/user', async ctx => {
    const { header, body } = ctx.request;
    const { name = '', email = '' } = body;
    const { role = '' } = header;
    console.log(role)
    if (role !== 'admin') {
        ctx.status = 401;
        ctx.body = {
            code: '401',
            msg: 'unauthorized post'
        }
        return;
    }
    if (!name || !email) {
        ctx.status = 404;
        ctx.body = {
            code: '404',
            msg: 'name与email不得为空'
        }
        return;
    }
    ctx.status = 200;
    ctx.body = {
        code: '200',
        data: {
            name,
            email
        },
        msg: '上传成功'
    }
})

app.use(koaBody());
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);