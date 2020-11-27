module.exports = {


  friendlyName: 'View payment',


  description: 'Display "Payment" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/cart/payment'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
