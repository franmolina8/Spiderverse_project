const express = require("express");
const router = express.Router();
const {
  getAllHeroes,
  createHero,
  getHeroByName
} = require("../controllers/hero.controller");

router.get("/get",  getAllHeroes);
router.post("/post",  createHero);
router.get("/get/:name", getHeroByName)

module.exports = router;