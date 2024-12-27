const { sendResponse, AppError } = require("../../../helpers/utils");
const User = require("../../../models/user");

const cancelSubscription = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.userId);

    if (!user) {
      throw new AppError(404, "User not found");
    }

    if (user.subscriptionType !== "Premium") {
      throw new AppError(400, "User does not have a Premium subscription");
    }

    user.subscriptionType = "Free";
    user.premiumExpiryDate = null;
    user.remainingDays = null;
    user.remainingHours = null;
    user.remainingMinutes = null;
    user.remainingSeconds = null;

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
