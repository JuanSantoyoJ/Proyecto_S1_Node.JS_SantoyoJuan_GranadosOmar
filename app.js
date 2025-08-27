require('dotenv').config();
const { connectDB, disconnect } = require("./db");
const prompt = require("prompt-sync")();
const LoginView = require("./views/loginView");
const AdminView = require("./views/adminView");
const ClienteView = require("./views/clienteView");

let currentUser = null;

async function main() {
  try {
    const db = await connectDB();
    console.log("✅ Conexión a DB:", db.databaseName);
  } catch (e) {
    console.error("❌ Error DB:", e);
    process.exit(1);
  }

  process.on("SIGINT", async () => {
    console.log("\n👋 Cerrando...");
    await disconnect();
    process.exit(0);
  });

  const loginView = new LoginView();
  const adminView = new AdminView();
  const clienteView = new ClienteView();

  while (true) {
    if (!currentUser) {
      currentUser = await loginView.show();
      continue;
    }

    if (currentUser.rol === "admin") {
      await adminView.show(currentUser);
    } else {
      await clienteView.show(currentUser);
    }
  }
}

main().catch(async (e) => {
  console.error("❌ Fatal:", e);
  await disconnect();
  process.exit(1);
});
