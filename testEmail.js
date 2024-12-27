// testEmail.js

const { sendEmail } = require("./helpers/email");

const testSendEmail = async () => {
  try {
    await sendEmail(
      "anhkhaichannel@gmail.com", // Thay bằng email của bạn để kiểm tra
      "Test Email",
      "This is a test email to verify the sendEmail function."
    );
    console.log("Test email sent successfully!");
  } catch (error) {
    console.error("Error sending test email:", error);
  }
};

testSendEmail();
