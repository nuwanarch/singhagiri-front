module.exports = {


  friendlyName: 'View shipping',


  description: 'Display "Shipping" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/cart/shipping'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
