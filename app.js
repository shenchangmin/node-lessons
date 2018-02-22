const express = require('express');
const utility = require('utility');
const superagent = require('superagent');
const cheerio = require('cheerio');
const app = express();
app.get('/', (req, res, next) => {
    superagent.get('https://cnodejs.org/').then(sres => {
        const $ = cheerio.load(sres.text);
        let items = [];
        $('#topic_list').find('.topic_title').each(function (idx, element) {
            let $element = $(element);
            items.push({
                title: $element.attr('title'),
                href: $element.attr('href')
            });
        });

        res.send(items);
    }).catch(err => {
        next(err);
    });
});
app.listen(3000, () => {
    console.log('app is listening at port 3000');
});