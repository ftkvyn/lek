/**
 * QuestionController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
	createMany: function(req,res){
		// console.log(req.body);
		Question.createEach(req.body.data)
		.fetch()
		.exec((err, data) => {
			if(err) {
				console.error(err);
			}
			console.log(data);
			res.json(data);
		});
		
	}

};

