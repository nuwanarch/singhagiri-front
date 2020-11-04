module.exports = {


  friendlyName: 'View products',


  description: 'Display "Products" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/products/products'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
