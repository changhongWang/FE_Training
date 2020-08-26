import KoaRouter from 'koa-router';
import demoController from '../api/demoController';

const router = new KoaRouter();

router.get('/demo', demoController.demo);

export default router;