import { DataTypes } from "sequelize";
import sequelize from "../config/db";

const RolePermission = sequelize.define("Role_permission", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  role_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  permission_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

RolePermission.sync();

export default RolePermission;
