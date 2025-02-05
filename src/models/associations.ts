import Role from "./role.model";
import Permission from "./permission.model";
import User from "./user.model";
import RolePermission from "./role_permission.model";

Role.belongsToMany(Permission, {
  through: RolePermission,
  foreignKey: "role_id",
});

Permission.belongsToMany(Role, {
  through: RolePermission,
  foreignKey: "permission_id",
});

Role.hasMany(User, {
  foreignKey: "role_id",
});

User.belongsTo(Role);
