const { sendResponse, AppError } = require("../../helpers/utils");
const Invoice = require("../../models/invoice");
const User = require("../../models/user");

const createInvoice = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.userId);

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    if (user.subscriptionType === "Premium") {
      return res.status(400).json({
        success: false,
        message: "User already has Premium subscription",
      });
    }

    const newInvoice = new Invoice({
      userID: user._id,
      amount: 15,
      subscriptionType: "Premium",
      paymentStatus: "Paid",
    });

    await newInvoice.save();

    user.subscriptionType = "Premium";
    user.paymentStatus = "Paid";
    user.premiumExpiryDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

    const remainingDays = Math.ceil(
      (user.premiumExpiryDate - Date.now()) / (1000 * 3600 * 24)
    );
    user.remainingDays = remainingDays;

    await user.save();

    sendResponse(
      res,
      200,
      true,
      {
        invoice: newInvoice,
        user: {
          ...user.toObject(),
          remainingDays,
        },
      },
      null,
      "Invoice created and user subscription upgraded to Premium!"
    );
  } catch (error) {
    next(error);
  }
};

module.exports = createInvoice;
