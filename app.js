const express = require("express");

const app = express();
const port = 8080; // You can choose any port that's free on your system

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
