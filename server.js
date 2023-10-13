const express = require("express");
const app = express();

//import our routes
const targetPriceRoutes = require("./routes/targetPricesRoutes");

// Use the routes

app.use("/api", targetPriceRoutes);

const port = process.env.PORT || 5000; // You can change the port as needed

// Define a route
app.get("/", (req, res) => {
  res.send("Hello, this is your Express server!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
