const koa = require('koa');
const koaRouter = require('koa-router');
const axios = require('axios');
const bodyParser = require('koa-bodyparser');
const Logger = require("koa-logger");
const cors = require('@koa/cors');


const app = new koa();
const router = new koaRouter({ prefix: '/v1/api' });
const PORT = process.env.PORT || 9010;
const URL_BACKEND_EXPRESS = process.env.URL_BACKEND_EXPRESS || 'http://localhost:9000/v1/api/welcome';
app.use(cors({ credentials: true, origin: true }));
app.use(bodyParser());



router.get('/welcome', async(ctx) => {
    try {
        const response = await axios.get(URL_BACKEND_EXPRESS);
        const { message } = await response.data;
        ctx.body = {
            ok: true,
            messageOne: 'Welcome to microservice with koa',
            messageTwo: message
        }
    } catch (err) {
        ctx.body = {
            ok: false,
            message: err
        }
    }
});

router.get('/healthz', (ctx) => {
    ctx.body = {
        ok: true,
        message: 'I am alive'
    }
});



app.use(Logger()).use(router.routes()).use(router.allowedMethods());

app.listen(PORT, () => {
    console.log(`Success ms-koa on port:${PORT}`);
});