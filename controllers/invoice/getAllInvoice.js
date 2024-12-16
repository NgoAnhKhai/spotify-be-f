const { sendResponse } = require("../../helpers/utils");
const Invoice = require("../../models/invoice");

const getAllInvoice = async (req, res, next) => {
  const limit = parseInt(req.query.limit) || 5;
  const page = parseInt(req.query.page) || 1;
  const skip = (page - 1) * limit;
  const invoice = await Invoice.find()
    .skip(skip)
    .limit(limit)
    .sort({ createAt: -1 })
    .exec();

  const totalInvoices = await Invoice.countDocuments();
  if (!invoice || invoice.length === 0) {
    return sendResponse(res, 404, false, null, null, "No found");
  }
  const totalPages = Math.ceil(totalInvoices / limit);
  sendResponse(
    res,
    200,
    true,
    {
      invoices: invoice,
      pagination: {
        page,
        limit,
        totalPages,
        totalInvoices,
      },
    },
    null,
    "Invoices retrieved successfully"
  );
};
module.exports = getAllInvoice;
