const axios = require("axios");

export default function contactHandler(req, res) {
  const { name, email, subject, message } = req.body;
  var data = JSON.stringify({
    chat_id: process.env.TELEGRAM_USER_NAME_ID,
    text: `Name : ${name}\nEmail : ${email}\nSubject : ${subject}\nMessage : ${message}`,
  });

  var config = {
    method: "post",
    url: `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_ID}/sendMessage`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config).catch((err) => {
    console.log(err.message);
  });
  res.status(200).json({
    status: "success",
    message: "Your message was sent, thank you!",
  });
}
