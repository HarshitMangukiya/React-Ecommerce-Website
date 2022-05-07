//expressjs ama lakhavu
const express = require("express");
//expressjs no code nakhi check karvu chale 6e ne je niche comment karelo 6e
const router = express.Router();
const Product = require("../models/Product");
const { body, validationResult } = require("express-validator");

//Route 1:create product using :POST "/api/product/createproduct"
//post(path,validation,function)
router.post(
  "/createproduct",
  [
    // express validation
    body("name", "please enter valid name").isLength({ min: 3 }),
    body("category", "please give category").notEmpty(),
    body("price", "please give price").isLength({ min: 1 }),
    body("size", "please give size").notEmpty(),
    body("color", "please give color").isLength({ min: 3 }),
  ],
  async (req, res) => {
    // obj={
    //     a:'harshit',
    //     number:2322
    // }
    // res.json(obj)

    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //  check whether the user with this exists email already
    try {
      let product = await Product.create({
        name: req.body.name,
        category: req.body.category,
        price: req.body.price,
        size: req.body.size,
        color: req.body.color,
        photo: req.body.photo,
      }).then((product) => res.json(product));
    } catch (error) {
      console.error(error.message);
      res.status(500).send("some error occured");
    }
    // res.send("how are you");
  }
);

//Route 2:delete product using :DELETE "/api/product/deleteproduct"
//post(path,validation,function)
router.delete("/deleteproduct/:id", async (req, res) => {
  //   const { title, description, tag } = req.body;
  try {
    //find the note to be delete and delete it
    let product = await Product.findById(req.params.id);
    if (!product) {
      res.status(404).send("not found product");
    }

    //allow deletion  only if user owns this note
    // if (note.user.toString() !== req.user.id) {
    //   return res.status(401).send("Not allowed");
    // }

    product = await Product.findByIdAndDelete(req.params.id);
    res.json({ success: "product has been deleted ", product: product });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("some error occured");
  }
}); 

//Route 3:display product using :get "/api/product/displayproduct"
//post(path,validation,function)
router.get("/displayproduct", async (req, res) => {
  // obj={
  //     a:"harshit",
  //     number:35
  // }
  // res.json(obj)
  try {
    //fetchall notes
    const product = await Product.find();
    res.json(product);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("some error occured");
  }
});

//Route 4:update product using :put "/api/product/updateproduct"
//post(path,validation,function)
router.put("/updateproduct/:id", async (req, res) => {
  const { name, category, price, size, color, photo } = req.body;

  try {
    //create a newnote object
    const newproduct = {};
    if (name) {
      newproduct.name = name;
    }
    if (category) {
      newproduct.category = category;
    }
    if (price) {
      newproduct.price = price;
    }
    if (size) {
      newproduct.size = size;
    }
    if (color) {
      newproduct.color = color;
    }
    if (photo) {
      newproduct.photo = photo;
    }

    //find the note to be updated and update it
    let product = await Product.findById(req.params.id);
    if (!product) {
      res.status(404).send("not found");
    }

    // if (note.user.toString() !== req.user.id) {
    //   return res.status(401).send("Not allowed");
    // }

    product = await Product.findByIdAndUpdate(  
      req.params.id,
      { $set: newproduct },
      { new: true }
    );
    res.json({product });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("some error occured");
  }
});

module.exports = router;
