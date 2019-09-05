
module.exports = {
	index: function(req,res){
		res.view('pages/index');
	},

	setup: function(req,res){
		res.view('pages/setup');
	},

	questions: function(req,res){
		res.view('pages/questions');
	}
};