require('dotenv').config();
const { connect, disconnect } = require("./db");

async function testDB() {
  try {
    const db = await connect();
    console.log("✅ Conexión exitosa a la base de datos:", db.databaseName);

    const collections = await db.listCollections().toArray();
    console.log("Colecciones en la DB:", collections.map(c => c.name));

  } catch (error) {
    console.error("❌ Error de conexión:", error);
  } finally {
    await disconnect();
  }
}

testDB();
