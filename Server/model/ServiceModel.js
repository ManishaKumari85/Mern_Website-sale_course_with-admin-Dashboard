import mongoose from "mongoose";

const ServiceSchema = mongoose.Schema(
  {
    ServiceName: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
      required: true,
    },
    Price: {
      type: Number,
      default: 0,
    },

    videoLink: {
      type: String,
      required: true,
    },
    Sub: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubCategory",
        required: true,
      },
    ],
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Service", ServiceSchema);
