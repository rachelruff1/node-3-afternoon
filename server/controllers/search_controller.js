const swag = require("../models/swag");

module.exports = {
  search: (req, res, next) => {
    const { category } = req.query;
    const filteredSwag = swag.filter(swag => swag.category === category);
    if (filteredSwag.length) {
      res.status(200).send(filteredSwag);
    } else {
      res.status(200).send(swag);
    }
  }
};
