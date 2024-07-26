import { Establishment } from "@models";

const establishmentMutations = {
  createEstablishment: async (_, { establishment }, { loaders }) => {
    const newEstablishment = new Establishment(establishment);

    const savedEstablishment = await newEstablishment.save();

    return loaders.establishment.one(savedEstablishment._id);
  },
  updateEstablishment: async (_, { id, establishment }) => {
    const updatedEstablishment = Establishment.findByIdAndUpdate(
      id,
      { $set: establishment },
      { new: true, runValidators: true }
    );
    return loaders.establishment.one(updatedEstablishment._id);
  },
};

export default establishmentMutations;
