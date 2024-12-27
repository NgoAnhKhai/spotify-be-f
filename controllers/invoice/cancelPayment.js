const { sendResponse } = require("../../helpers/utils");
const Invoice = require("../../models/invoice");

const cancelPayment = async (req, res, next) => {
  try {
    const { invoiceId } = req.body;

    if (!invoiceId) {
      return sendResponse(
        res,
        400,
        false,
        null,
        "invoiceId is required",
        "Bad Request"
      );
    }

    const invoice = await Invoice.findById(invoiceId);

    if (!invoice) {
      return sendResponse(
        res,
        404,
        false,
        null,
        "Invoice not found",
        "Not Found"
      );
    }

    if (invoice.paymentStatus !== "Pending") {
      return sendResponse(
        res,
        400,
        false,
        null,
        "Invoice is not pending",
        "Bad Request"
      );
    }

    invoice.paymentStatus = "Failed";
    await invoice.save();

    await Invoice.findByIdAndDelete(invoiceId);

    sendResponse(
      res,
      200,
      true,
      null,
      "Payment cancelled and invoice deleted.",
      "Success"
    );
  } catch (error) {
    console.error("Error in cancelPayment:", error);
    next(error);
  }
};

module.exports = cancelPayment;
