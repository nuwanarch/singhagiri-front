module.exports = {


  friendlyName: 'View singleproduct',


  description: 'Display "Singleproduct" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/products/singleproduct'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
