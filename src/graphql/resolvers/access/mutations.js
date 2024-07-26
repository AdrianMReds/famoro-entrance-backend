import { Access } from "@models";

const accessMutations = {
  createAccess: async (_, { access }, { loaders }) => {
    const newAccess = new Access(access);

    const savedAccess = await newAccess.save();

    return loaders.access.one(savedAccess._id);
  },
  updateAccess: async (_, { id, access }, { loaders }) => {
    const updatedAccess = await Access.findByIdAndUpdate(
      id,
      { $set: access },
      { new: true, runValidators: true }
    );
    return loaders.access.one(updatedAccess._id);
  },
};
export default accessMutations;
