const Koa = require('koa');
const Router = require('koa-router');
const cors = require('@koa/cors');
const koaBody = require('koa-body');
const app = new Koa();
const router = new Router();

// 增加前缀
router.prefix('/api');

router.get('/', async ctx => {
    ctx.body = 'Hello Wang Here!'
})

router.get('/api', async ctx => {
    ctx.body = 'Hello Api!'
})

router.get('/async', async ctx => {
    let result = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Halo1');
        }, 2000);
    })
    ctx.body = result;
})

router.post('/post', async ctx => {
    let { body } = ctx.request;
    console.log(body);
    console.log(ctx.request);
    ctx.body = {
        ...body
    };
})

app.use(koaBody());
app.use(cors());
app
.use(router.routes())
.use(router.allowedMethods());

app.listen(3000);