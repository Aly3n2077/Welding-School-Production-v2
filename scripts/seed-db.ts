import { Pool } from "pg"
import fs from "fs"
import path from "path"

async function seedDatabase() {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false,
  })

  try {
    console.log("Connecting to database...")
    const client = await pool.connect()

    console.log("Reading seed file...")
    const seedPath = path.join(process.cwd(), "db", "seed.sql")
    const seed = fs.readFileSync(seedPath, "utf8")

    console.log("Executing seed data...")
    await client.query(seed)

    console.log("Database seeded successfully!")
    client.release()
  } catch (error) {
    console.error("Error seeding database:", error)
  } finally {
    await pool.end()
  }
}

// Run the function if this script is executed directly
if (require.main === module) {
  seedDatabase()
    .then(() => console.log("Database seeding complete"))
    .catch((err) => console.error("Database seeding failed:", err))
}

export default seedDatabase
