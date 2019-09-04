module.exports = {


  friendlyName: 'View setup',


  description: 'Display "Setup" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/setup'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
