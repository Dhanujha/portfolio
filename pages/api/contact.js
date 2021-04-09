const axios = require("axios");

export default async function contactHandler(req, res) {
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
  try {
    const d = await axios(config);
    console.log(d);
    res.status(200).json({
      status: "success",
      message: "Your message was sent, thank you!",
      other: d,
    });
  } catch (e) {
    res.status(400).json({
      status: "error",
      message: "Something went wrong, please try again",
      other: e
    });
  }
}
