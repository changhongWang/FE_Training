import combineRoutes from 'koa-combine-routers'

import captchaRouter from './captchaRouter';

module.exports = combineRoutes(
    captchaRouter
)