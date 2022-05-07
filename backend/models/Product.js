// mongoose documentation mathi lay avu
const mongoose = require("mongoose");
const { Decimal128 } = mongoose;
const { Schema } = mongoose;

//mongoose  schema documentation mathi malshe
const ProductSchema = new Schema({
  // String is shorthand for {type: String}
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    default: "General",
  },
  price: {
    type: Decimal128,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

//model(modelname, schema) mukavi
const product = mongoose.model("product", ProductSchema);

module.exports = product;
