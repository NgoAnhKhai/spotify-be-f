const { sendResponse, AppError } = require("../../helpers/utils");
const Invoice = require("../../models/invoice");

const getInvoiceById = async (req, res, next) => {
  try {
    const filter = req.params.id;

    const invoice = await Invoice.findById(filter).populate("userID");

    if (!invoice) {
      throw new AppError(404, "Invoice not found", "NotFound");
    }
    console.log(invoice);

    sendResponse(
      res,
      200,
      true,
      { invoice },
      null,
      "Invoice fetched successfully!"
    );
  } catch (error) {
    next(error);
  }
};

module.exports = getInvoiceById;
