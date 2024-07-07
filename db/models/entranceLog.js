import mongoose from "mongoose";

const EntranceLogSchema = mongoose.Schema(
  {
    establishment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Establishment",
      required: true,
    },
    guest: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Guest",
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    access: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Access",
      required: true,
    },
  },
  { timestamps: true }
);

const EntranceLog = mongoose.model("EntranceLog", EntranceLogSchema);

export default EntranceLog;
