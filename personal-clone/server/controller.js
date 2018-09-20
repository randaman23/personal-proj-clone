module.exports = {
  getProducts: (req, res) => {
    const db = req.app.get("db");
    db.get_products(req.params.category)
      .then(products => {
        res.status(200).send(products);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  },

  getItem: (req, res) => {
    const db = req.app.get("db");
    db.get_item(req.params.id)
      .then(item => {
        res.status(200).send(item);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  },

  addItem: (req, res) => {
    const db = req.app.get("db");
    const { user_id, product_id, color_id, quantity, size } = req.body;
    db.add_item({ user_id, product_id, color_id, quantity, size })
      .then(user => {
        res.status(200).send(user);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  }
};
