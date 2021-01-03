const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const axios = require("axios");

app.use(bodyParser.json());
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// );

app.post("/", function (req, res) {
  const message = req.body.message;

  if (message) {
    axios
      .post(
        "https://api.telegram.org/bot1234111483:AAEUbW5tSvPkHqOAsM2mP312UsR3eC8RtMg/sendMessage",
        {
          chat_id: message.chat.id,
          text: "Hey!! My cat is gorgeous!!!!",
        }
      )
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

app.listen(3000, function () {
  console.log("Who Am I Bot listening on port 3000!");
});
