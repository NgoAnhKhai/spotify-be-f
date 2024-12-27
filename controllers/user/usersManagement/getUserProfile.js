// src/controllers/user/getUserProfile.js

const { AppError, sendResponse } = require("../../../helpers/utils");
const User = require("../../../models/user");

const getUserProfile = async (req, res, next) => {
  try {
    const { userId } = req.user;

    const user = await User.findById(userId).select(
      "username email subscriptionType premiumExpiryDate paymentDate createdAt"
    );

    if (!user) {
      throw new AppError(404, "User not found", "NotFound");
    }

    let remainingDays = 0;
    let remainingHours = 0;
    let remainingMinutes = 0;
    let remainingSeconds = 0;

    if (
      user.subscriptionType === "Premium" &&
      user.premiumExpiryDate > Date.now()
    ) {
      const remainingTime = user.premiumExpiryDate - Date.now();

      remainingDays = Math.floor(remainingTime / (1000 * 3600 * 24));
      remainingHours = Math.floor(
        (remainingTime % (1000 * 3600 * 24)) / (1000 * 3600)
      );
      remainingMinutes = Math.floor(
        (remainingTime % (1000 * 3600)) / (1000 * 60)
      );
      remainingSeconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
    }

    const userData = {
      username: user.username,
      email: user.email,
      subscriptionType: user.subscriptionType,
      paymentDate: user.paymentDate,
      premiumExpiryDate: user.premiumExpiryDate,
      remainingDays,
      remainingHours,
      remainingMinutes,
      remainingSeconds,
      createdAt: user.createdAt,
    };

    sendResponse(
      res,
      200,
      true,
      { user: userData },
      null,
      "User profile fetched successfully!"
    );
  } catch (error) {
    next(error);
  }
};

module.exports = getUserProfile;
