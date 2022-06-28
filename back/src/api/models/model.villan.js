const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VillanSchema = new Schema({
  name: { type: String, required: true },
  nickname: { type: String, required: false },
  universe: { type: String, required: false },
  alive: { type: Boolean, required: true },
  power: { type: String, required: false },
  image: { type: String, required: true },
});
const Villan = mongoose.model("villan", VillanSchema)
module.exports = Villan