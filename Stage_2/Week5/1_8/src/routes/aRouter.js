const KoaRouter = require('koa-router');
const a = require('../api/a');

const aRouter = new KoaRouter();

aRouter.get('/a', a);

module.exports = aRouter;