import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    code: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    price: { type: Number, required: true, min: 0 },
    quantity: { type: Number, required: true, min: 0 },
    color: { type: String, trim: true },
    imagePath: { type: String, trim: true },
  },
  { timestamps: true }
);

productSchema.index({ code: 1 }, { unique: true });

const Product = mongoose.model("Product", productSchema);
export default Product;
