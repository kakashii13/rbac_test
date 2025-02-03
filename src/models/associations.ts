import Permission from "./permission.model";
import Role from "./role.model";
import Role_permission from "./role_permission.model";
import User from "./user.model";

Role.hasMany(User, {
  foreignKey: "role_id",
});
User.belongsTo(Role);

Role.belongsToMany(Permission, {
  through: Role_permission,
  foreignKey: "role_id",
});

Permission.belongsToMany(Role, {
  through: Role_permission,
  foreignKey: "permission_id",
});
