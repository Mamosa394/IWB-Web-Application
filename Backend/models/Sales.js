import mongoose from "mongoose";

const salesSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  product: { type: String, required: true },
  amount: { type: Number, required: true },
  salesperson: { type: String, required: true },
});

const Sales = mongoose.model("Sales", salesSchema);

export default Sales;
