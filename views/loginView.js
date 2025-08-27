const prompt = require("prompt-sync")();
const UsuarioController = require("../controllers/usuarioController");

class LoginView {
  async show() {
    console.log(`
=== AUTENTICACIÓN ===
1. Registrarse (rol cliente)
2. Iniciar sesión
0. Salir
`);
    const op = prompt("Opción: ");

    if (op === "1") {
      const nombre = prompt("Nombre: ");
      const correo = prompt("Correo: ");
      const contrasena = prompt.hide("Contraseña: ");
      const empresa = prompt("Empresa (opcional): ");
      try {
        const u = await UsuarioController.register({ nombre, correo, contrasena, empresa });
        console.log("✅ Registrado:", { ...u, contrasena: undefined });
      } catch (e) {
        console.log("❌", e.message);
      }
      return null;
    }

    if (op === "2") {
      const correo = prompt("Correo: ");
      const contrasena = prompt.hide("Contraseña: ");
      const u = await UsuarioController.login(correo, contrasena);
      if (!u) {
        console.log("❌ Credenciales inválidas");
        return null;
      }
      console.log(`👤 Sesión: ${u.nombre} (${u.rol})`);
      return u;
    }

    if (op === "0") {
      console.log("👋 Bye");
      process.exit(0);
    }
  }
}

module.exports = LoginView;
