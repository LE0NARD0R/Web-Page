import { Schema, model } from "mongoose";

const task = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    img:{
      type: String,
      required: true,
    },
    sex:{
      type: String,
      required: true,
    },
    done: {
      type: Boolean,
      default: false,
    },
    male:{
      type: Boolean,
      default: false,
    },
    female:{
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Task", task);
