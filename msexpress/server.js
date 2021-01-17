const express = require('express');
const { Router } = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const router = Router();
app.use(cors({ credentials: true, origin: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


router.get('/welcome', (req, res) => {
    return res.json({
        ok: true,
        message: 'Welcome to microservice with express'
    });
});

router.get('/healthz', (req, res) => {
    return res.json({
        ok: true,
        message: 'I am alive'
    });
});

app.use('/v1/api', router);

const PORT = process.env.PORT || 9000;





app.listen(PORT, (err) => {
    if (err) throw new Error(err);
    console.log(`Success ms-express on port:${PORT}`);
})