import { Establishment } from "@models";

const establishmentMutations = {
  createEstablishment: async (_, { establishment }) => {
    const newEstablishment = new Establishment(establishment);

    return newEstablishment.save();
  },
  updateEstablishment: async (_, { id, establishment }) => {
    const updatedEstablishment = Establishment.findByIdAndUpdate(
      id,
      { $set: establishment },
      { new: true, runValidators: true }
    );
    return updatedEstablishment;
  },
};

export default establishmentMutations;
