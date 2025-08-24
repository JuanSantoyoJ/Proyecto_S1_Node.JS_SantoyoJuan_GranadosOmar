require('dotenv').config();
const { connectDB, disconnect } = require("./db");

async function testDB() {
  try {
    const db = await connectDB();
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

const prompt = require("prompt-sync")();
const { createClient, listClients } = require("./views/ClientView.js");
const { createProposal, acceptProposal } = require("./views/ProposalView.js");

async function main() {
  console.log(`
  1. Crear cliente
  2. Listar clientes
  3. Crear propuesta
  4. Aceptar propuesta
  5. Salir
  `);

  const opcion = prompt("Selecciona una opción: ");

  if (opcion === "1") await createClient();
  if (opcion === "2") await listClients();
  if (opcion === "3") await createProposal();
  if (opcion === "4") await acceptProposal();
  if (opcion === "5") process.exit(0);

  main(); // vuelve al menú
}

main();