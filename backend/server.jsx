import { Client } from "pg";
import { URL } from "url";

// Parse the ElephantSQL URL
const dbUrl =
  "postgres://xkmbjwln:SRdZNN4zVX-xN1VVrG-bqmdRz0W2gmz4@tuffi.db.elephantsql.com/xkmbjwln";
const params = new URL(dbUrl);
const auth = params.auth.split(":");

const client = new Client({
  user: auth[0],
  password: auth[1],
  host: params.hostname,
  port: params.port,
  database: params.pathname.split("/")[1],
  ssl: {
    rejectUnauthorized: false, // Disable SSL certificate validation (only for development)
  },
});

async function importDataFromTable() {
  try {
    await client.connect();

    // Write your SQL query to select data from the table
    const query = "SELECT * FROM your_table";

    // Execute the SQL query
    const result = await client.query(query);

    // Process the result
    console.log("Imported data:");
    console.table(result.rows); // Output the result in a tabular format

    // Close the database connection
    await client.end();
  } catch (error) {
    console.error("Error importing data from PostgreSQL:", error);
  }
}

importDataFromTable();
  