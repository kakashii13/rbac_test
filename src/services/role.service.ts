import Role from "../models/role.model";
import Role_permission from "../models/role_permission.model";
import HttpException from "../utils/http_exception";

type Role_permission_type = {
  role_permission_id: number;
  role_id: number;
  permission_id: number;
};

class Role_service {
  static async createRole(role_name: string) {
    try {
      const [role, created] = await Role.findOrCreate({
        where: {
          name: role_name,
        },
        defaults: { name: role_name },
      });

      return created;
    } catch (error) {
      //   console.log(error);
      throw new HttpException(400, error);
    }
  }

  static async getPermissions(role_id: string) {
    try {
      //   const role_permission: Role_permission_type[] =
      //     await Role_permission.findAll({
      //       where: { role_id: role_id },
      //     });
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
}

export default Role_service;
