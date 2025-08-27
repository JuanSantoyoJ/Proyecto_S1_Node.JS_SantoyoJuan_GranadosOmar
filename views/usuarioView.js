// view/UsuarioView.js
const prompt = require("prompt-sync")();
const UsuarioController = require("../controllers/usuarioController.js");

class UsuarioView {
  static async menu() {
    while (true) {
      console.log("\n=== MENÚ PRINCIPAL ===");
      console.log("1. Iniciar sesión");
      console.log("2. Registrarse");
      console.log("3. Salir");

      const opcion = prompt("Seleccione una opción: ");

      if (opcion === "1") {
        await this.login();
      } else if (opcion === "2") {
        await this.registrar();
      } else if (opcion === "3") {
        console.log("👋 Saliendo...");
        process.exit();
      } else {
        console.log("❌ Opción inválida.");
      }
    }
  }

  static async registrar() {
    console.log("\n=== REGISTRO ===");
    const nombre = prompt("Nombre: ");
    const correo = prompt("Correo electrónico: ");
    const contrasena = prompt.hide("Contraseña: "); // oculta entrada
    const empresa = prompt("Empresa (opcional): ");

    const nuevo = await UsuarioController.create({
      nombre,
      correo,
      contrasena,
      empresa: empresa || null,
      rol: "cliente" // 👈 todos los registros son cliente
    });

    console.log("✅ Usuario registrado:", nuevo);
  }

  static async login() {
    console.log("\n=== LOGIN ===");
    const correo = prompt("Correo electrónico: ");
    const contrasena = prompt.hide("Contraseña: ");

    const usuario = await UsuarioController.login(correo, contrasena);

    if (!usuario) {
      console.log("❌ Credenciales inválidas.");
      return;
    }

    console.log(`✅ Bienvenido ${usuario.nombre} (rol: ${usuario.rol})`);

    await this.menuUsuario(usuario);
  }

  static async menuUsuario(usuario) {
    if (usuario.rol === "admin") {
      console.log("\n=== MENÚ ADMINISTRADOR ===");
      console.log("1. Listar usuarios");
      console.log("2. Salir");

      const opcion = prompt("Seleccione una opción: ");

      if (opcion === "1") {
        const lista = await UsuarioController.list();
        console.table(
          lista.map((u) => ({
            id: u.id,
            nombre: u.nombre,
            correo: u.correo,
            rol: u.rol,
            empresa: u.empresa || "-"
          }))
        );
      }
    } else {
      console.log("\n=== MENÚ CLIENTE ===");
      console.log("Por ahora no hay opciones disponibles.");
    }
  }
}

module.exports = UsuarioView;
