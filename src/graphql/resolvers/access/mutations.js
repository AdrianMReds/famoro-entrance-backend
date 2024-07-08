import { Access } from "@models";

const accessMutations = {
  createAccess: async (_, { access }) => {
    const newAccess = new Access(access);

    return newAccess.save();
  },
  updateAccess: async (_, { id, access }) => {
    const updatedAccess = await Access.findByIdAndUpdate(
      id,
      { $set: access },
      { new: true, runValidators: true }
    );
    return updatedAccess;
  },
};
export default accessMutations;
