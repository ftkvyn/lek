/**
 * QuestionController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
	createMany: function(req,res){
		var questions = Question.createEach(req.body).fetch();
		res.json(questions);
	}

};

