const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  make: { type: String, required: true },
  year: { type: String, required: true },
  model:{ type: String, required: true},
  part: {type: String, required: true},
  detail: {type: String, required: true},
  price: {type:Number, required: true},
  image: {
    type: Array
  },
  date: { type: Date, default: Date.now }
});

const CarPartsPost = mongoose.model("CarPartsPost", postSchema);

module.exports = CarPartsPost;
