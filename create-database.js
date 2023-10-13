const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("my-database.db");

db.serialize(() => {
  // Create the "stocks" table
  db.run("CREATE TABLE stocks (stock TEXT, targetPrice TEXT, letter TEXT)");

  // Insert sample data
  const stmt = db.prepare(
    "INSERT INTO stocks (stock, targetPrice, letter) VALUES (?, ?, ?)"
  );
  stmt.run("AAPL", "$170", "Buy");
  stmt.run("MSFT", "$300", "Buy");
  stmt.run("AMZN", "$150", "Buy");
  stmt.run("GOOGL", "$140", "Buy");
  stmt.run("TSLA", "$350", "Hold");
  stmt.run("META", "$100", "Sell");
  stmt.run("NFLX", "$200", "Hold");
  stmt.run("NVDA", "$300", "Buy");
  stmt.run("BRK.A", "$600,000", "Buy");
  stmt.run("UNH", "$400", "Buy");
  stmt.run("VGT", "$150", "Buy");
  stmt.finalize();

  db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Database created and data inserted.");
  });
});
