const swag = require("../models/swag");

module.exports = {
  add: (req, res, next) => {
    const { id } = req.query;
    const { cart } = request.session.user;
    //This will return -1 if it isn't in the cart
    const index = cart.findIndex(swag => swag.id == id);

    if (index === -1) {
      const selectedSwag = swag.find(swag => swag.id == id);
      cart.push(selectedSwag);
      req.session.user.total += selectedSwag.price;
    } else {
      res.status(200).req.session.user;
    }
  },

  delete: (req, res, next) => {
    const { id } = req.query;
    const { cart } = req.session.user;
    const selectedSwag = swag.find(swag => swag.id == id);

    if (selectedSwag) {
      const i = cart.findIndex(swag => swag.id == id);
      cart.splice(i, 1);
      req.session.user.total -= selectedSwag.price;
    }
    res.status(200).req.session.user;
  },

  checkout: (req, res, next) => {
      req.session.user = [];
      req.session.user.total = 0.00;
      res.status(200).send(req.session.user);
  }
};
