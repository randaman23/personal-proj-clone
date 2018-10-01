
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
    const { product_id, selectQuantity, selectColor, selectSize } = req.body;
    console.log(req.body)
    db.add_item([ req.session.user.user_id, product_id, selectQuantity, selectColor, selectSize ])
      .then(cart => {
        res.status(200).send(cart);
      })
      .catch(err => {
        console.log(err);
        res.status(401).send(err);
      });
  },

  cartCount: (req, res) => {
    const db = req.app.get("db")
    db.cart_count([req.session.user.user_id])
    .then(count => {
      res.status(200).send(count)
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
  },

  getCart: (req, res) => {
    const db = req.app.get("db")
    db.get_cart(req.session.user.user_id)
    .then(cart => {
      res.status(200).send(cart)
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
  },

  deleteItem: (req, res) => {
    const db = req.app.get("db")
    db.delete_cart_item(req.session.user.user_id, req.params.id)
    .then(items => {
      res.status(200).send(items)
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
  }
};
