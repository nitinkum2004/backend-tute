const express = require("Express");

const app = express();

app.get("/app", (req, res) => {
  res.send("Hello form Backend");
});

app.listen(3000, () => {
  console.log("App start listening on PORT 3000");
});
