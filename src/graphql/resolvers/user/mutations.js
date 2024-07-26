import { User } from "@models";

const userMutations = {
  createUser: async (_, { user }, { authScope }) => {
    if (authScope === "superadmin" || authScope === "admin") {
      const newUser = new User(user);
      return newUser.save();
    } else {
      console.log("Not authorized");
      return {};
    }
  },
  updateUser: async (_, { id, user }, { authScope }) => {
    console.log(authScope);
    if (authScope === "superadmin" || authScope === "admin") {
      const updatedUser = User.findByIdAndUpdate(
        id,
        { $set: user },
        { new: true, runValidators: true }
      );
      return updatedUser;
    } else {
      console.log("Not authorized");
      return {};
    }
  },
};

export default userMutations;
