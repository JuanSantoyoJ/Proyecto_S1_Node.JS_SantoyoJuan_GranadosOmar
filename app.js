require('dotenv').config();
const { connectDB, disconnect } = require("./db");
const prompt = require("prompt-sync")();
const LoginView = require("./views/loginView");
const AdminView = require("./views/adminView");
const ClienteView = require("./views/clienteView");

async function main() {
  let currentUser = null;

  // Conexión a DB
  try {
    const db = await connectDB();
    console.log("✅ Conexión a DB:", db.databaseName);
  } catch (e) {
    console.error("❌ Error al conectar con DB:", e);
    process.exit(1);
  }

  // Manejo de Ctrl+C
  process.on("SIGINT", async () => {
    console.log("\n👋 Cerrando aplicación...");
    await disconnect();
    process.exit(0);
  });

  const loginView = new LoginView();
  const adminView = new AdminView();
  const clienteView = new ClienteView();

  while (true) {
    // Si no hay usuario, mostrar login
    if (!currentUser) {
      currentUser = await loginView.show();
      continue;
    }

    // Según rol, mostrar menú correspondiente
    if (currentUser.rol === "admin") {
      // Retorna null si el admin cierra sesión
      currentUser = await adminView.show(currentUser);
    } else {
      // Retorna null si el cliente cierra sesión
      currentUser = await clienteView.show(currentUser);
    }

    // Si el usuario cerró sesión, volver al login
    if (!currentUser) {
      console.log("\n🔄 Volviendo al login...\n");
    }
  }
}

// Ejecutar main con captura de errores
main().catch(async (e) => {
  console.error("❌ Error fatal:", e);
  await disconnect();
  process.exit(1);
});
