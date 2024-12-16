const { sendResponse, AppError } = require("../../../helpers/utils");
const User = require("../../../models/user");

const cancelSubscription = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.userId);

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    if (user.subscriptionType !== "Premium") {
      return res.status(400).json({
        success: false,
        message: "User does not have a Premium subscription",
      });
    }

    user.subscriptionType = "Free";
    user.premiumExpiryDate = null;
    user.remainingDays = null;

    await user.save();

    sendResponse(
      res,
      200,
      true,
      { user },
      null,
      "Subscription successfully cancelled and user downgraded to Free"
    );
  } catch (error) {
    next(error);
  }
};

module.exports = cancelSubscription;
