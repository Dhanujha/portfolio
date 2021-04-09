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

  // axios(config)
  //   .then((dat) => {
  //     res.status(200).json({
  //       status: "success",
  //       message: "Your message was sent, thank you!",
  //       dat,
  //     });
  //   })
  //   .catch((err) => {
  //     console.log(err.message);
  //   });
  const d = await axios.post(
    `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_ID}/sendMessage`,
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  console.log(d);

  res.status(200).json({
    status: "success",
    message: "Your message was sent, thank you!",
  });
}
