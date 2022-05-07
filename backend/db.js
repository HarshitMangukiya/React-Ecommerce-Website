const mongoose = require("mongoose");
// this is connection string from mongodb compass clothswebsite is database name 6e
const mongoURI =
  "mongodb://localhost:27017/clothswebsite?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";

  //database sathe connection
const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("connection successfully");
  });
};

module.exports=connectToMongo;
