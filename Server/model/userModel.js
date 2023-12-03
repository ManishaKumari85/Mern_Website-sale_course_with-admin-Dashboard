import mongoose from "mongoose";
const expirationTime = 1;
let currentTime = Date.now();
const ObjectId = mongoose.Schema.Types.ObjectId;
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    otp: {
      type: String,
      expiration_time: {
        type: Date,
        default: new Date(currentTime + expirationTime * 1000),
      },
    },
    phoneNO: {
      type: Number,
      required: true,
    },
    parentId: {
      type: ObjectId,
      default: null,
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },

    date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model("users", userSchema);
