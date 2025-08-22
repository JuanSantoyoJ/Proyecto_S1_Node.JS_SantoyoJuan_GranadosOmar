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
const { crearCliente, listarClientes } = require("./views/ClientView.js");
const { crearPropuesta, aceptarPropuesta } = require("./views/PropuestaView.js");

async function main() {
  console.log(`
  1. Crear cliente
  2. Listar clientes
  3. Crear propuesta
  4. Aceptar propuesta
  5. Salir
  `);

  const opcion = prompt("Selecciona una opción: ");

  if (opcion === "1") await crearCliente();
  if (opcion === "2") await listarClientes();
  if (opcion === "3") await crearPropuesta();
  if (opcion === "4") await aceptarPropuesta();
  if (opcion === "5") process.exit(0);

  main(); // vuelve al menú
}

main();