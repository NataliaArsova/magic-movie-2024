const express = require("express");

const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Home page");
});
app.listen(port, () => console.log(`Server si listening on port ${port}...`));
