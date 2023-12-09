import mongoose from "mongoose";

const todoschema = new mongoose.Schema({
  text: {
    type: String,
    require: true,
  },
});

export default mongoose.model("ToDo", todoschema);
