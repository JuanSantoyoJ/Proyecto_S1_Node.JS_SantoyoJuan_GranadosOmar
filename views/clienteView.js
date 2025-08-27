const prompt = require("prompt-sync")();
const UsuarioController = require("../controllers/usuarioController");
const PropuestaController = require("../controllers/propuestaController");
const ProyectoController = require("../controllers/proyectoController");
const TransaccionController = require("../controllers/transaccionController");

class ClienteView {
  async show(currentUser) {
    let continuar = true; // bandera para controlar el bucle del cliente

    while (continuar) {
      // Refrescamos el usuario antes de mostrar el menú
      currentUser = await UsuarioController.findById(currentUser._id);

      console.log(`
=== MENÚ CLIENTE ===
1. Ver mi información
2. Actualizar mi información
3. Crear propuesta
4. Registrar ingreso en un proyecto
0. Cerrar sesión
`);

      const op = prompt("Opción: ").trim(); // eliminamos espacios innecesarios

      if (op === "1") {
        console.log({
          _id: currentUser._id.toString(),
          nombre: currentUser.nombre,
          correo: currentUser.correo,
          empresa: currentUser.empresa || null,
          rol: currentUser.rol
        });
      } else if (op === "2") {
        const nombre = prompt("Nuevo nombre (enter = igual): ").trim();
        const correo = prompt("Nuevo correo (enter = igual): ").trim();
        const empresa = prompt("Nueva empresa (enter = igual): ").trim();
        const data = {};
        if (nombre) data.nombre = nombre;
        if (correo) data.correo = correo;
        if (empresa) data.empresa = empresa;

        await UsuarioController.updateUsuario(currentUser._id, data);
        console.log("✅ Información actualizada.");

        // Refrescamos currentUser para la próxima iteración
        currentUser = await UsuarioController.findById(currentUser._id);
      } else if (op === "3") {
        const nombre = prompt("Nombre de la propuesta: ").trim();
        const descripcion = prompt("Descripción: ").trim();
        const precio = prompt("Precio: ").trim();
        const prop = await PropuestaController.create({
          clienteId: currentUser._id,
          nombre,
          descripcion,
          precio
        });
        console.log("✅ Propuesta creada:", prop);
      } else if (op === "4") {
        const proyectos = await ProyectoController.listByCliente(currentUser._id);
        if (!proyectos.length) {
          console.log("Aún no tienes proyectos.");
        } else {
          console.table(proyectos.map(p => ({
            _id: p._id.toString(),
            nombre: p.nombre,
            status: p.status,
            fechaInicio: p.fechaInicio?.toISOString()?.slice(0,10)
          })));
          const proyectoId = prompt("ID del proyecto: ").trim();
          const cantidad = prompt("Cantidad: ").trim();
          const descripcion = prompt("Descripción: ").trim();
          const tx = await TransaccionController.create({
            proyectoId,
            tipo: "ingreso",
            cantidad,
            descripcion,
            rolQuienCrea: "cliente"
          });
          console.log("✅ Ingreso registrado:", tx);
        }
      } else if (op === "0") {
        console.log("🔒 Sesión cerrada");
        continuar = false; // rompe el bucle del cliente
        return null; // retorna null al main para volver al login
      } else {
        console.log("❌ Opción inválida, intenta de nuevo");
      }
    }
  }
}

module.exports = ClienteView;
