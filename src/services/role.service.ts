import Role from "../models/role.model";
import Role_permission from "../models/role_permission.model";
import HttpException from "../utils/http_exception";
import PermissionService from "./permission.service";

// Al crear el role, deberian crearse los permisos que posee
// Permisos admin
const permissions_by_role: { [key: string]: string[] } = {
  admin: [
    "create_user",
    "update_user",
    "delete_user",
    "read_user",
    "create_role",
    "delete_role",
    "update_role",
    "read_role",
    // "create_permission",
    // "delete_permission",
    // "update_permission",
    // "read_permission",
  ],
  editor: ["create_user", "update_user", "read_user", "read_role"],
  viewer: ["read_user", "read_role"],
};

class Role_service {
  static async createRole(role_name: string, level: number) {
    try {
      // Creo el role
      const [role, created] = await Role.findOrCreate({
        where: {
          name: role_name,
        },
        defaults: { name: role_name, level },
      });

      // Creo los permisos necesarios para el rol creado
      if (created) {
        const role_permissions = await Promise.all(
          permissions_by_role[role_name].map(async (permission) => ({
            role_id: role.dataValues.id,
            permission_id: await PermissionService.getPermissionID(permission),
          }))
        );
        await Role_permission.bulkCreate(role_permissions);
      }

      return created;
    } catch (error) {
      console.log(error);
      throw new HttpException(400, error);
    }
  }

  static async getPermissions(role_id: string) {
    try {
      const role_permission = await Role_permission.findAll({
        where: { role_id: role_id },
      });

      console.log(role_permission);
      //   return role_permission.map((p) => p.permission_id);
    } catch (error) {
      throw new Error("Internal server error.");
    }
  }

  static async getRole(role: string | number) {
    try {
      const where = typeof role == "string" ? { name: role } : { id: role };

      return Role.findOne({ where });
    } catch (error) {
      throw new HttpException(500, error);
    }
  }

  static async getRoles() {
    try {
      const roles = await Role.findAll();
      return roles;
    } catch (error) {
      throw new HttpException(500, error);
    }
  }
}

export default Role_service;
