const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path"); // Import the path module

// Import your routes
const targetPriceRoutes = require("./routes/targetPricesRoutes");

// Use the cors middleware to enable CORS
app.use(cors());

// Use the routes
app.use("/api", targetPriceRoutes);

// Serve the static frontend files
app.use(express.static(path.join(__dirname, "client/build")));

// Define a route to handle frontend requests
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

const port = process.env.PORT || 5000;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
