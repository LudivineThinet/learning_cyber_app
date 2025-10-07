import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  pseudo: { type: String, required: true },
  password: { type: String, required: true },

  // champs supplémentaires pour le profil
  firstName: { type: String },
  lastName: { type: String },
  birthDate: { type: Date },
  avatar: { type: String },
  level: { type: Number, default: 1 },
  points: { type: Number, default: 0 },
});

const User = mongoose.model("User", userSchema);
export default User;
