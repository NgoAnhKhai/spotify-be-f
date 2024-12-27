const { sendResponse, AppError } = require("../../helpers/utils");
const Invoice = require("../../models/invoice");
const User = require("../../models/user");

const createInvoice = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.userId);
    console.log("User found:", user);

    if (!user) {
      throw new AppError("User not found", 404);
    }

    if (user.subscriptionType === "Premium") {
      throw new AppError("User already has a premium subscription", 400);
    }

    const newInvoice = new Invoice({
      userID: user._id,
      amount: 15,
      subscriptionType: "Premium",
      paymentStatus: "Pending",
    });

    await newInvoice.save();

    sendResponse(
      res,
      200,
      true,
      {
        invoice: newInvoice,
      },
      null,
      "Invoice created. Please proceed with payment."
    );
  } catch (error) {
    console.error("Error in createInvoice:", error);
    next(error);
  }
};

module.exports = createInvoice;
