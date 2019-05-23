const express = require("express");
const app = express();
const path = require("path");
const compression = require("compression");
const helmet = require("helmet");

// Routes
const locationsRoute = require("./routes/locations");
const forecastsRoute = require("./routes/forecasts");

// Default port
const PORT = process.env.PORT || 3000;

// compression
app.use(compression());

// helmet config
app.use(helmet({ hidePoweredBy: { setTo: "Aurora" } }));

// req.body middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static file
app.use(express.static(path.join(__dirname, "../dist")));

// Route config
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../dist/index.html"));
});

app.use("/api/locations", locationsRoute);
app.use("/api/forecasts", forecastsRoute);

app.listen(PORT, () => console.log("Server started"));
