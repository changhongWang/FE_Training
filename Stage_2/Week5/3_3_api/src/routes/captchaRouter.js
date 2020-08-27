import KoaRouter from 'koa-router';
import captchaController from '../api/captchaController';

const router = new KoaRouter();

router.get('/getCaptcha', captchaController.getCaptcha);

export default router;