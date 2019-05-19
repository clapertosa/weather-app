const express = require("express");
const app = express();
const path = require("path");
const compression = require("compression");
const helmet = require("helmet");

// Default port
const PORT = process.env.PORT || 3000;

// compression
app.use(compression());

// helmet config
app.use(helmet({ hidePoweredBy: { setTo: "Aurora" } }));

// Serve static file

// Route config
app.get("*", (req, res) => {
  res.sendfile(path.resolve(__dirname, "dist/index.html"));
});

app.listen(PORT, () => console.log("Server started"));
