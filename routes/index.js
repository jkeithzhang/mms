var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	res.render('intro', {title: 'MMS'});
});
router.get('/money', function(req, res) {
	res.render('money', {title: 'MMS beta'});
});

//partials
router.get('/partials/:name', function (req, res) {
    var name = req.params.name;
    res.render('partials/' + name, { title: 'MMS v1.0' });
});




module.exports = router;
