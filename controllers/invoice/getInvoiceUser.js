const { sendResponse, AppError } = require("../../helpers/utils");
const Invoice = require("../../models/invoice");

const getUserInvoices = async (req, res, next) => {
  try {
    const userId = req.user.userId;

    const invoices = await Invoice.find({ userID: userId }).populate("userID");

    if (!invoices || invoices.length === 0) {
      throw new AppError(404, "No invoices found for this user", "NotFound");
    }

    sendResponse(
      res,
      200,
      true,
      { invoices },
      null,
      "User invoices fetched successfully!"
    );
  } catch (error) {
    next(error);
  }
};

module.exports = getUserInvoices;
