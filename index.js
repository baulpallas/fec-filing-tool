const express = require("express");

const app = express();

if (process.env.NODE_ENV === "production") {
  //serve up production access
  app.use(express.static("client/build"));

  //serve up index.html file if doesn't recognize file...
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
console.log("SERVER RUNNING ON PORT", PORT);
app.listen(PORT);
