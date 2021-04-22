const express = require("express");
const app = express();

const port = 5000;

app.use(express.static(__dirname + "/public"));

app.listen(port, () => {
  console.log("Server is ON...");
});
