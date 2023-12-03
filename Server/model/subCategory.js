import mongoose from "mongoose";


const subCategorySchema = new mongoose.Schema(
  {
    SubCategoryName: {
      type: String,
      required: true,
    },
    
    Cat: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'category' ,
      
    }],
    Description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("SubCategory", subCategorySchema);
