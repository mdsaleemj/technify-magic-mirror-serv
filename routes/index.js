'use strict'
var IndexModel = require('../models/index');
var mongoose = require('mongoose');
var Employee = require('../models/employee');

mongoose.connect('mongodb://localhost/magic-mirror-db');

module.exports = function(router){

    var model = new IndexModel();

	router.get('/',function(req,res,next){
      res.render('index', model);
	});

	router.get('/api/employee/:corpid',function(req,res,next){
		var corpid = req.params.corpid;
		Employee.findOne({corpid : corpid},function(err,employee){
			if(employee)
			return res.json(employee);
         
           res.json({
            "Message" : "Did not match our records"
		});

		})
		// console.log(employeeInfo.corpid);
		// if(employeeInfo.corpid){
  //         return res.json(JSON.stringify(employeeInfo.corpid));
		// }

		
	});
}