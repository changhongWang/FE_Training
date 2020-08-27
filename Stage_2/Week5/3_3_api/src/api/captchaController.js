import svgCaptcha from 'svg-captcha';

class DemoController {
    constructor() {

    }
    async getCaptcha(ctx) {
        console.log('captcha 开始生成');
        const captcha = svgCaptcha.create({
            size: 4,
            ignoreChars: '0o1il',
            color: true,
            noise: Math.floor(Math.random() * 5),
            width: 150,
            height: 50,
        });
        ctx.body = {
            code: 200,
            data: captcha.data
        }
        console.log('captcha 生成成功');
    }
}

export default new DemoController;