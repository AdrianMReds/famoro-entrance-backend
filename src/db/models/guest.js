import mongoose from "mongoose";

const GuestSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: false,
    },
    phoneNumber: {
      type: String,
      required: false,
    },
    establishment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Establishment",
      required: true,
    },
    idSaved: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Guest = mongoose.model("Guest", GuestSchema);

export default Guest;
