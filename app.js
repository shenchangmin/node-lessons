const express = require('express');
const utility = require('utility');
const app = express();
app.get('/', (req, res) => {
    const q = req.query.q;
    const mad5Valur = utility.md5(q);
    res.send(mad5Valur);
});
app.listen(3000, () => {
    console.log('app is listening at port 3000');
});