import config from "./index";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  config.db.name,
  config.db.user,
  config.db.password,
  {
    dialect: "postgres",
    host: config.db.host,
    logging: false,
  }
);

export default sequelize;
