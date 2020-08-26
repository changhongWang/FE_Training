const Koa = require('koa');
const path = require('path');
const helmet = require('koa-helmet');
const statics = require('koa-static');
const app = new Koa();

const router = require('./routes');

app.use(helmet());

// 静态资源中间件
app.use(statics(path.join(__dirname, '../public')));
app.use(router());

app.listen(3000);