const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HeroSchema = new Schema({
  name: { type: String, required: true },
  nickname: { type: String, required: false },
  universe: { type: String, required: false },
  alive: { type: Boolean, required: true },
  power: { type: String, required: false },
  image: { type: String, required: true },
});

const Hero = mongoose.model("heroes", HeroSchema);
module.exports = Hero;
