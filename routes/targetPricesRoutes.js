// routes/targetPriceRoutes.js
const express = require("express");
const router = express.Router();

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("my-database.db");

// Define a route to retrieve the target prices and letters listing
router.get("/target-prices", (req, res) => {
  db.all("SELECT * FROM stocks", (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

module.exports = router;
