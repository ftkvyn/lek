/**
 * QuestionController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
	createMany: function(req,res){
		console.log(req.body);
		var questions = Question.createEach(req.body.data).fetch();
		res.json(questions);
	}

};

