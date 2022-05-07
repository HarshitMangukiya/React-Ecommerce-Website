//expressjs ama lakhavu
const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");

//Route 1:create user using :POST "/api/user/createuser"
//post(path,validation,function)
router.post(
  "/createuser",
  [
    // express validation
    body("name", "please enter valid name").isLength({ min: 3 }),
    body("email", "please give email unique").isEmail(),
    body("password", "please give at least 5 digit").isLength({ min: 5 }),
  ],
  async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //  check whether the user with this exists email already
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "sorry a user with this email already exists" });
      }
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      }).then((user) => res.json(user));
    } catch (error) {
      console.error(error.message);
      res.status(500).send("some error occured");
    }
    // res.send("how are you");
  }
);

//Route 2:user authetication login
//post(path,validation,function)
router.post(
  "/login",
  [
    // express validation
    body("email", "please give email unique").isEmail(),
    body("password", "please give at least 5 digit").isLength({ min: 5 }),
  ],
  async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      //user find kare 6e
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ error: "please login with correct password and id" });
      }
      console.log("hello");
      res.json(user);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("some error occured");
    }
  }
);

//Route 3:get loggedin user details using:POST "/api/user/getuser" login required
//post(path,validation,function)
router.post(
  "/getuser",
  async (req, res) => {
    try {
      userId = "todo";
      const user = await User.findOne(userId).select("-password");
    } catch (error) {
      console.error(error.message);
      res.status(500).send("some error occured");   
    }
  }
);  
module.exports = router;
