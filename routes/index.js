var express = require('express');
var router = express.Router();

// var fs = require('fs');
// var parse = require('csv-parse');
// var transform = require('stream-transform');

var parse = require('csv-parse/lib/sync');
var fs = require('fs');

var data = fs.readFileSync('clubs.csv', 'utf8');

var clubs = parse(data, {columns: true});

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index',
        {
            clubs: clubs
        }
    );
});

module.exports = router;