import { DataTypes } from "sequelize";
import sequelize from "../config/db";

const Role = sequelize.define("Role", {
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

Role.sync();

export default Role;
