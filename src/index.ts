import express from "express";
import config from "./config/index";
import sequelize from "./config/db";

class Server {
  app: express.Application;
  constructor() {
    this.app = express();
    this.initializeMiddlewares();
    this.initializeRoutes();
  }

  async testDatabaseConnection() {
    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }

  initializeMiddlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  initializeRoutes() {
    this.app.get("/", (req, res) => {
      res.send("API is running");
    });
  }

  initializeServer() {
    this.testDatabaseConnection();
    this.app.listen(config.port, () => {
      console.log(`Server is running at http://localhost:${config.port}`);
    });
  }
}

export default Server;
