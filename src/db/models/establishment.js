import mongoose from "mongoose";

const EstablishmentSchema = mongoose.Schema(
  {
    name: { type: String, required: [true, "Agrega un nombre"] },
    address: {
      type: String,
      required: true,
    },
    admins: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    // scanners: [{

    // }],
    //   type: {type: String, enum: ["colonia", "building"]}
    // categories: [String], // Este campo se usará después para colonias o edificios que tengan diferentes áreas con diferentes accesos
  },
  { timestamps: true }
);

const Establishment = mongoose.model("Establishment", EstablishmentSchema);

export default Establishment;
