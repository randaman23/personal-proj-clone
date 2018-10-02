
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
    console.log('initialized')
    const db = req.app.get("db");
    const { product_id, selectQuantity, selectColor, selectSize } = req.body;
    console.log(req.body)
   
    db.get_cart(req.session.user.user_id)
    .then(cart => {
     if(selectColor && selectSize){
       colorIdx = cart.findIndex((e) => e.color_id === selectColor)
       sizeIdx = cart.findIndex((e) => e.size === selectSize)
      //  console.log('first_if', selectColor, selectSize, cart)
       if(colorIdx !== -1 && sizeIdx !== -1){
         console.log('fired')
         db.quantity_increase([selectColor, selectSize, req.session.user.user_id])
         .then(cart => res.status(200).send(cart))
         .catch(err => {
          console.log(err);
          res.status(500).send(err);
        })
       } else{
         db.add_item([req.session.user.user_id, product_id, selectQuantity, selectColor, selectSize])
         .then(cart => res.status(200).send(cart))
         .catch(err => {
          console.log(err);
          res.status(500).send(err);
        })
       }
     }
     else if(selectColor) {
       colorIdx = cart.findIndex((e) => e.color_id === selectColor)
       if(colorIdx !== -1) {
         db.quantity_inc([selectColor, req.session.user.user_id])
         .then(cart => res.status(200).send(cart))
         .catch(err => {
          console.log(err);
          res.status(500).send(err);
        })
       } else{
        db.add_item([req.session.user.user_id, product_id, selectQuantity, selectColor, selectSize])
        .then(cart => res.status(200).send(cart))
        .catch(err => {
         console.log(err);
         res.status(500).send(err);
       })
       }
     }
     else {
      productIdx = cart.findIndex((e) => e.product_id === product_id)
      if(productIdx !== -1) {
        db.product_quant([product_id, req.session.user.user_id])
        .then(cart => res.status(200).send(cart))
         .catch(err => {
          console.log(err);
          res.status(500).send(err);
        })
      } else{
        db.add_item([req.session.user.user_id, product_id, selectQuantity, selectColor, selectSize])
        .then(cart => res.status(200).send(cart))
        .catch(err => {
         console.log(err);
         res.status(500).send(err);
       })
      }
     }
    })
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
    const {id} = req.params
    db.delete_cart_item([id, req.session.user.user_id])
    .then(items => {
      res.status(200).send(items)
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
  },

  cartIncrease: (req, res) => {
    const db = req.app.get("db")
    const {id} = req.params
    db.cart_increase([id, req.session.user.user_id])
    .then(items => {
      res.status(200).send(items)
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
  },

  cartDecrease: (req, res) => {
    const db = req.app.get("db")
    const {id} = req.params
    db.cart_decrease([id, req.session.user.user_id])
    .then(items => {
      res.status(200).send(items)
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
  },

  handlePayment: (req, res) => {
    const { total, token:{id}} = req.body
    stripe.charges.create(
        {
            amount: total,
            currency: "usd",
            source: id,
            description: "Test Charge from Randall"
        },
        (err, charge) => {
            if(err) {
                console.log(err)
                return res.status(500).send(err)
            } else {
                console.log(charge)
                return res.status(200).send(charge)
            }
        }
    )
}
};
