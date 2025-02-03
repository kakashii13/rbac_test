import { DataTypes } from "sequelize";
import sequelize from "../config/db";

const Permission = sequelize.define("Permission", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Permission.sync();

export default Permission;
