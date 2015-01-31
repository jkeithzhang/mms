module.exports = function(app, groupDB) {

	app.get('/api/getList', function(req, res) {
		var date = req.param('date');
		groupDB.find({
			date: date
		}).toArray(function(err, result) {
			if(err) {
				console.log('ERROR ---> getList')
			} else {
				console.log(result);
				res.json(result);
			}
		});
	});

	app.get('/api/insert', function (req, res) {
		var record = JSON.parse(req.param('record'));
		var selectedDate = req.param('selectedDate');
		console.log("--->", record);
		console.log(typeof(record));
		console.log("--->", selectedDate);
		console.log(typeof(selectedDate));
		groupDB.find
	    groupDB.update(
	    	{
	    		date: selectedDate
	    	},
	    	{
	    		$push: 
	    		{
	    			consuming: record
	    		}
	    	}
		, function(err, result) {
	        if (err) {
	            console.log('ERROR ---> /api/update');
	        } else {
	            console.log(result); 
	            res.send(result);              
	        }
	    });   
	});

}