import { DataTypes } from "sequelize";
import sequelize from "../config/db";

const RolePermission = sequelize.define(
  "Role_permission",
  {
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    permission_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: false }
);

export default RolePermission;
