const { removeCardById } = require("../models/cards-models");

exports.deleteCardById = (req, res, next) => {
  const { card_id } = req.params;
  console.log(card_id);
  removeCardById(card_id)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {
      next(err);
    });
};
