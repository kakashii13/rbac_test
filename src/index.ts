import express from "express";
import config from "./config/index";
import sequelize from "./config/db";
import cors from "cors";
import user_router from "./routes/users.route";
import handleErrors from "./middlewares/error.middleware";
import role_router from "./routes/role.route";
import permission_router from "./routes/permissions.route";

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
    this.app.use(cors());
    this.app.use(express.urlencoded({ extended: true }));
  }

  initializeRoutes() {
    this.app.use("/", user_router);
    this.app.use("/", role_router);
    this.app.use("/", permission_router);
    this.app.use(handleErrors);
  }

  initializeServer() {
    this.testDatabaseConnection();
    this.app.listen(config.port, () => {
      console.log(`Server is running at http://localhost:${config.port}`);
    });
  }
}

export default Server;
