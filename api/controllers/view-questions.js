module.exports = {


  friendlyName: 'View questions',


  description: 'Display "Questions" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/questions'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
