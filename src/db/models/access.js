import mongoose from "mongoose";

const AccessSchema = mongoose.Schema(
  {
    establishment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Establishment",
      required: true,
    },
    initial_date: {
      type: Date,
      required: true,
    },
    final_date: {
      type: Date,
      required: true,
    },
    infinite: {
      type: Boolean,
      default: false,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    guest: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Guest",
      required: true,
    },
    // scanners: [{

    // }],
  },
  { timestamps: true }
);

const Access = mongoose.model("Access", AccessSchema);

export default Access;
