// src/controllers/invoice/completePayment.js

const { sendResponse, AppError } = require("../../helpers/utils");
const Invoice = require("../../models/invoice");
const User = require("../../models/user");

const completePayment = async (req, res, next) => {
  try {
    const { invoiceId } = req.body;

    const invoice = await Invoice.findById(invoiceId);
    if (!invoice) {
      throw new AppError(404, "Invoice not found");
    }

    if (invoice.paymentStatus !== "Pending") {
      throw new AppError(400, "Invoice is not pending");
    }

    invoice.paymentStatus = "Paid";
    await invoice.save();

    const user = await User.findById(invoice.userID);
    if (user) {
      user.subscriptionType = "Premium";
      user.paymentDate = new Date();

      user.premiumExpiryDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
      await user.save();

      console.log("Payment Date Set To:", user.paymentDate);
      console.log("User Updated:", user);
    }

    sendResponse(
      res,
      200,
      true,
      { invoice, user },
      null,
      "Payment completed successfully."
    );
  } catch (error) {
    console.error("Error in completePayment:", error);
    next(error);
  }
};

module.exports = completePayment;
