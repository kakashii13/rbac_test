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
  /**  Cada role tiene un nivel para aplicar la jerarquia al momento de crear usuarios
  
  Admin -> level 1
  Editor -> level 2
  Viewer -> level 3

  El editor solo puede crear usuarios de su nivel o un nivel inferior
  */
  level: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Role.sync();

export default Role;
