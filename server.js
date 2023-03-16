const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/chat", (req, res) => {
  setTimeout(function () {
    res.send(req.body.chat);
  }, 1000);
});

app.listen(3100, () => {
  console.log("chatgpt-robot app listening on port 3100");
});
