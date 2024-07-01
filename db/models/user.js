import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    name: { type: String, required: [true, "Agrega un nombre"] },
    lastname: { type: String, required: [true, "Agrega apellidos"] },
    email: {
      type: String,
      required: [true, "Agrega un email"],
      unique: true,
    },
    password: { type: String, required: [true, "Agrega un password"] },
    birthday: { type: Date },
    type: {
      type: String,
      enum: ["resident", "admin", "superadmin", "guard"],
      required: true,
    },
    status: {
      type: String,
      enum: ["debt", "normal"],
      default: "normal",
    },
    // categorias: [String], // Este campo se usará después para colonias o edificios que tengan diferentes áreas con diferentes accesos
    // establecimiento: { type: mongoose.Schema.Types.ObjectId, ref: 'Establecimiento' } // Este campo se usará después
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

export default User;
