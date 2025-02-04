import User from "../models/user.model";
import bcrypt from "bcrypt";
import RoleService from "./role.service";

class UserService {
  static async createUser(nickname: string, password: string, role: string) {
    try {
      const password_encripted = bcrypt.hash(password, 10);

      // get role id
      const role_db = await RoleService.getRole(role);

      console.log(role_db);

      // const [user, created] = await User.findOrCreate({
      //   where: { nickname },
      //   defaults: { nickname, password_encripted, role_id: 1 },
      // });

      // return created;
    } catch (error) {
      throw new Error("Error to create user.");
    }
  }
  static async getUsers() {}
  static async updateUser() {}
  static async deleteUser() {}
}
export default UserService;
