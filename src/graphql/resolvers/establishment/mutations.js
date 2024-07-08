import { Establishment } from "@models";

const establishmentMutations = {
  createEstablishment: async (_, { establishment }) => {
    const newEstablishment = new Establishment(establishment);

    return newEstablishment.save();
  },
};

export default establishmentMutations;
