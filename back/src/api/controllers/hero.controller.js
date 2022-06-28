const Hero = require("../models/model");
const HTTPSTATUSCODE = require("../../utils/httpstatuscode");

const getAllHeroes = async (req,res,next) => {
    try{
        const heroes = await Hero.find();
        return res.json({
            status: 200, 
            message: HTTPSTATUSCODE[200],
            data: { heroes: heroes },
        });
    }catch (error){
        return next(error)
    }
};
const createHero = async (req, res, next) => {
    try {
      const newHero = new Hero(req.body);
      const newHeroDB = await newHero.save();
      return res.json({
        status: 201,
        message: HTTPSTATUSCODE[201],
        data: { newHero: newHero },
      });
    } catch (error) {
      return next(error);
    }
  };
  const getHeroByName = async (req, res, next) => {
    const { name } = req.params;
  
    try {
      const heroByName = await Hero.find({ name: name });
      return res.json({
        status: 200,
        message: "OK",
        data: { hero: heroByName },
      });
    } catch (error) {
      return next(error);
    }
  };

  module.exports = {
    getAllHeroes,
    createHero,
    getHeroByName
  };