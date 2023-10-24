const express = require('express');

const app = express();

app.use(express.json());

app.get('/', async(req, res) => {
    return res.send('api ok!');
})

app.listen(3000, () => {
    console.log('servidor ativo!')
});