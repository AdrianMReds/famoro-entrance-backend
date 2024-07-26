import { Guest } from "@models";

const guestMutations = {
  createGuest: async (_, { guest }, { loaders }) => {
    const newGuest = new Guest(guest);

    const savedGuest = await newGuest.save();

    return loaders.guest.one(savedGuest._id);
  },
  updateGuest: async (_, { id, guest }, { loaders }) => {
    const updatedGuest = await Guest.findByIdAndUpdate(
      id,
      { $set: guest },
      { new: true, runValidators: true }
    );
    return loaders.guest.one(updatedGuest._id);
  },
};

export default guestMutations;
