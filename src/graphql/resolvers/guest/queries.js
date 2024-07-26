import { Guest } from "@models";

const guestQueries = {
  guests: async (_, args, { loaders }) => {
    const guests = Guest.find();
    return loaders.guest.many(guests.map(({ id }) => id));
  },
  guest: async (_, { id }, { loaders }) => loaders.guest.one(id),
};

export default guestQueries;
