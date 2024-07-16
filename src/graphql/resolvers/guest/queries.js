import { Guest } from "@models";

const guestQueries = {
  guests: async (_, args) => {
    const guests = Guest.find();
    return guests;
  },
  guest: async (_, { id }) => {
    const guest = Guest.findById(id);
    return guest;
  },
};

export default guestQueries;
