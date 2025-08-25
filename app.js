require('dotenv').config();
const { update } = require('./controllers/clienteController.js');
const { connectDB, disconnect } = require("./db");

async function testDB() {
  try {
    const db = await connectDB();
    console.log("✅ Conexión exitosa a la base de datos:", db.databaseName);

    const collections = await db.listCollections().toArray();
    console.log("Colecciones en la DB:", collections.map(c => c.name));

  } catch (error) {
    console.error("❌ Error de conexión:", error);
    process.exit(1); // Salir si no se puede conectar a la DB
  }
  // NO cerrar la conexión aquí, se mantendrá abierta para la aplicación
}

const prompt = require("prompt-sync")();
const { createClient, listClients, updateClient } = require("./views/clienteView.js");
const { createProposal, acceptProposal } = require("./views/propuestaView.js");

async function main() {
  // Probar conexión DB al inicio
  await testDB();

  // Función para manejar el cierre limpio de la aplicación
  process.on('SIGINT', async () => {
    console.log('\n👋 Cerrando aplicación...');
    await disconnect();
    process.exit(0);
  });

  // Menú principal
  async function showMenu() {
    console.log(`
  === GESTOR DE PORTAFOLIO FREELANCE ===
  1. Crear cliente
  2. Listar clientes
  3. Actualizar cliente
  3. Crear propuesta
  4. Aceptar propuesta
  5. Salir
    `);

    const opcion = prompt("Selecciona una opción: ");

    try {
      if (opcion === "1") await createClient();
      if (opcion === "2") await listClients();
      if (opcion === "3") await updateClient();
      console.log("👋 ¡Hasta luego!");
      await disconnect();
      process.exit(0);
    } catch (error) {
    console.error("❌ Error:", error.message);
  }

  showMenu(); // vuelve al menú
}

showMenu();
}

main().catch(async (error) => {
  console.error("❌ Error fatal:", error);
  await disconnect();
  process.exit(1);
});