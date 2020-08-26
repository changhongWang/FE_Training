const KoaRouter = require('koa-router');
const b = require('../api/b');

const bRouter = new KoaRouter();

bRouter.get('/b', b);

module.exports = bRouter;