class DemoController {
    constructor() {

    }
    async demo(ctx) {
        ctx.body = 'DEMO'
    }
}

export default new DemoController;