const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const invoiceSchema = new Schema(
  {
    userID: { type: Schema.Types.ObjectId, ref: "User", required: true },
    amount: {
      type: Number,
      required: true,
      default: 15,
    },
    dateIssued: { type: Date, default: Date.now },
    subscriptionType: {
      type: String,
      enum: ["Free", "Premium"],
      default: "Free",
      required: true,
    },
    paymentStatus: {
      type: String,
      enum: ["Paid", "Pending", "Failed"],
      default: "Pending",
    },
    premiumExpiryDate: { type: Date },
    remainingDays: { type: Number },
  },
  { timestamps: true }
);

const Invoice = mongoose.model("Invoice", invoiceSchema);

module.exports = Invoice;
