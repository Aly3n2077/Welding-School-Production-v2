import { Pool } from "pg"
import fs from "fs"
import path from "path"

async function initializeDatabase() {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false,
  })

  try {
    console.log("Connecting to database...")
    const client = await pool.connect()

    console.log("Reading schema file...")
    const schemaPath = path.join(process.cwd(), "db", "schema.sql")
    const schema = fs.readFileSync(schemaPath, "utf8")

    console.log("Executing schema...")
    await client.query(schema)

    console.log("Database schema created successfully!")
    client.release()
  } catch (error) {
    console.error("Error initializing database:", error)
  } finally {
    await pool.end()
  }
}

// Run the function if this script is executed directly
if (require.main === module) {
  initializeDatabase()
    .then(() => console.log("Database initialization complete"))
    .catch((err) => console.error("Database initialization failed:", err))
}

export default initializeDatabase
