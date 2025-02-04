import Permission from "../models/permission.model";
import HttpException from "../utils/http_exception";

class PermissionService {
  static async createPermission(name: string) {
    try {
      const [permission, created] = await Permission.findOrCreate({
        where: {
          name,
        },
        defaults: {
          name,
        },
      });

      return created;
    } catch (error) {
      throw new HttpException(500, error);
    }
  }
  static async getPermissions() {
    try {
      const permissions = await Permission.findAll();
      return permissions;
    } catch (error) {
      throw new HttpException(500, error);
    }
  }

  static async getPermissionID(name: string) {
    try {
      const permission = await Permission.findOne({ where: { name } });
      return permission?.dataValues.id;
    } catch (error) {
      throw new HttpException(500, error);
    }
  }

  static async updatePermission() {}
  static async deletePermission() {}
}

export default PermissionService;
