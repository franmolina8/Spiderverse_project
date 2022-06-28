const Villan = require("../models/model.villan");
const HTTPSTATUSCODE = require("../../utils/httpstatuscode");


const getAllVillans = async (req, res, next) => {
    try {
      const villans = await Villan.find();
      return res.json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: { villans: villans },
      });
    } catch (error) {
      return next(error);
    }
  };

  const createVillan = async (req, res, next) => {
    try {
      const newVillan = new Villan(req.body);
      const newVillanDB = await newVillan.save();
      return res.json({
        status: 201,
        message: HTTPSTATUSCODE[201],
        data: { newVillan: newVillan },
      });
    } catch (error) {
      return next(error);
    }
  };
  const getVillanByName = async (req, res, next) => {
    const { name } = req.params;
  
    try {
      const villanByName = await Villan.find({ name: name });
      return res.json({
        status: 200,
        message: "OK",
        data: { villan: villanByName },
      });
    } catch (error) {
      return next(error);
    }
  };

  module.exports = {
    getAllVillans,
    createVillan,
    getVillanByName
  };