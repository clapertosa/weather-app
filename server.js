const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "dist")));

  // Handle React routing, return all requests to React app
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
  });
}

app.listen(PORT, () => console.log("Listening on port", PORT));
