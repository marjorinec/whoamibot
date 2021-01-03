const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const axios = require("axios");
const port = 3000;
const telegramApiUrl = "https://api.telegram.org/bot";
const botToken = "1234111483:AAEUbW5tSvPkHqOAsM2mP312UsR3eC8RtMg";

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.post("/", function (req, res) {
  const message = req.body.message.text;
  const chatId = req.body.message.chat.id;

  if (message) {
    axios
      .post(`${telegramApiUrl}${botToken}/sendMessage`, {
        chat_id: chatId,
        text: "NÃO TEM SHINGEKI HOJE PORRAAAAAA",
      })
      .then((response) => {
        console.log("Message posted");
        res.status(200).send(response);
      })
      .catch((err) => {
        console.log("Error: ", err);
        res.end("Error: ", err);
      });
  } else {
    res.status(200).send({});
  }
});

app.listen(port, function () {
  console.log(`Who Am I Bot listening on port ${port}`);
});
