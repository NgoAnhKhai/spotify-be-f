const Invoice = require("../../../models/invoice");
const User = require("../../../models/user");
const { sendResponse, AppError } = require("../../../helpers/utils");

const updateSubscription = async (req, res, next) => {
  const { subscriptionType, premiumExpiryDate } = req.body;

  try {
    const user = await User.findById(req.user.userId);
    if (!user) {
      throw new AppError(404, "User not found", "NotFound");
    }

    if (
      user.subscriptionType === "Premium" &&
      user.premiumExpiryDate > Date.now()
    ) {
      const currentRemainingTime = user.premiumExpiryDate - Date.now();
      const currentRemainingDays = Math.floor(
        currentRemainingTime / (1000 * 3600 * 24)
      );
      const currentRemainingHours = Math.floor(
        (currentRemainingTime % (1000 * 3600 * 24)) / (1000 * 3600)
      );
      const currentRemainingMinutes = Math.floor(
        (currentRemainingTime % (1000 * 3600)) / (1000 * 60)
      );
      const currentRemainingSeconds = Math.floor(
        (currentRemainingTime % (1000 * 60)) / 1000
      );

      throw new AppError(
        400,
        `You already have a Premium subscription. ${currentRemainingDays} days, ${currentRemainingHours} hours, ${currentRemainingMinutes} minutes, and ${currentRemainingSeconds} seconds remaining.`,
        "BadRequest"
      );
    }

    if (subscriptionType === "Premium") {
      const newInvoice = new Invoice({
        userID: user._id,
        amount: 15,
        subscriptionType: "Premium",
        paymentStatus: "Paid",
      });
      await newInvoice.save();

      user.subscriptionType = "Premium";

      const newPremiumExpiryDate = new Date(
        Date.now() + 30 * 24 * 60 * 60 * 1000
      );
      user.premiumExpiryDate = newPremiumExpiryDate;

      user.remainingDays = Math.ceil(
        (newPremiumExpiryDate - Date.now()) / (1000 * 3600 * 24)
      );
    }

    await user.save();

    const remainingTime = user.premiumExpiryDate - Date.now();
    const remainingDays = Math.floor(remainingTime / (1000 * 3600 * 24));
    const remainingHours = Math.floor(
      (remainingTime % (1000 * 3600 * 24)) / (1000 * 3600)
    );
    const remainingMinutes = Math.floor(
      (remainingTime % (1000 * 3600)) / (1000 * 60)
    );
    const remainingSeconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    sendResponse(
      res,
      200,
      true,
      {
        user: {
          ...user.toObject(),
          remainingDays,
          remainingHours,
          remainingMinutes,
          remainingSeconds,
        },
      },
      null,
      "Subscription updated successfully!"
    );
  } catch (error) {
    next(error);
  }
};

module.exports = updateSubscription;
