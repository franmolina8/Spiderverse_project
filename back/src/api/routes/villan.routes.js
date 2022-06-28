const express = require("express");
const router = express.Router();

const {
    getAllVillans,
    createVillan,
    getVillanByName
  } = require("../controllers/villan.controller");

router.get("/get", getAllVillans);
router.post("/post", createVillan);
router.get("/get/:name", getVillanByName)


module.exports = router;