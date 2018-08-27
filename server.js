const express = require("express");
const app = express();
const compression = require("compression");
const morgan = require("morgan");
const path = require("path");

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV === "production") {
  app.disable("x-powered-by");
  app.use(compression());
  app.use(morgan("common"));

  app.use(express.static(path.join(__dirname, "dist")));

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
  });
}

app.listen(PORT, () => console.log("Server started"));
