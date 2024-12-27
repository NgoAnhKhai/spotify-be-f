const { AppError, sendResponse } = require("../../helpers/utils");
const Invoice = require("../../models/invoice");

const getPendingInvoice = async (req, res, next) => {
  try {
    const userId = req.user.userId;
    console.log("Fetching Pending Invoice for User ID:", userId);

    const pendingInvoice = await Invoice.findOne({
      userID: userId,
      paymentStatus: "Pending",
    });

    console.log("Pending Invoice Found:", pendingInvoice);

    if (!pendingInvoice) {
      throw new AppError(404, "Invoice Pending is not found");
    }

    sendResponse(
      res,
      200,
      true,
      { invoice: pendingInvoice },
      null,
      "Lấy hóa đơn Pending thành công."
    );
  } catch (error) {
    console.error("Error in getPendingInvoice:", error);
    next(error);
  }
};

module.exports = getPendingInvoice;
