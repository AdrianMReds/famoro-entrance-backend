import { Guest } from "@models";

const guestMutations = {
  createGuest: async (_, { guest }) => {
    const newGuest = new Guest(guest);
    return newGuest.save();
  },
  updateGuest: async (_, { id, guest }) => {
    const updatedGuest = await Guest.findByIdAndUpdate(
      id,
      { $set: guest },
      { new: true, runValidators: true }
    );
    return updatedGuest;
  },
};

export default guestMutations;
