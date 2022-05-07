// mongoose documentation mathi lay avu
const mongoose = require("mongoose");
const {Schema}=mongoose;


//mongoose  schema documentation mathi malshe
const UserSchema = new Schema({
  // String is shorthand for {type: String}
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique:true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default:Date.now
  },
});

//model(modelname, schema) mukavi
const user=mongoose.model('user',UserSchema);

module.exports=user;
