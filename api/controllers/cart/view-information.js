module.exports = {


  friendlyName: 'View information',


  description: 'Display "Information" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/cart/information'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
