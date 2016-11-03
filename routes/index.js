'use strict'
var IndexModel = require('../models/index');


var employeeInfo = {

	"naseetharaman" : {
     "name" : "Narayanan Seetharaman",
     "meeting" : [ {
     	"time" : "2:00 PM IST",
     	"title" : " Deployment",
     	
      }]
	},

	"mprattile" : {
	   "name" : "Midhun Prattile",
        "meeting" : [ {
	     	"time" : "2:00 PM IST",
	     	"title" : " Deployment",
     	
      }]

	},

	"mboomibalan" : {
	   "name" : "Maheshwaran Boomibalan",
       "meeting" : [ {
	       "time" : "2:00 PM IST",
	       "title" : " Deployment",
     	
      }]

	}
};

module.exports = function(router){

    var model = new IndexModel();

	router.get('/',function(req,res,next){
      res.render('index', model);
	});

	router.get('/api/employee/:corpid',function(req,res,next){
		var corpid = req.params.corpid;
		console.log(employeeInfo.corpid);
		if(employeeInfo.corpid){
          return res.json(JSON.stringify(employeeInfo.corpid));
		}

		res.json({
           "Message" : "Did not match our records"
		})
	});
}