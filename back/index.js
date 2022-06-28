const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const server = express();


const heroRoutes = require("./src/api/routes/hero.routes");
const villanRoutes = require("./src/api/routes/villan.routes")
const userRoutes =  require("./src/api/routes/user.routes")

const { connect } = require("./src/config/database");
connect();


server.set("secretKey", process.env.API_SECRET);

server.use((req, res, next) => {
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
  });

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use(
    cors({
      origin: "*",
      credentials: true,
    })
  );
  server.use("/hero", heroRoutes);
  server.use("/villan", villanRoutes);
  server.use("/users", userRoutes);



  const PORT = process.env.PORT || 5000;

  server.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`);
  });


