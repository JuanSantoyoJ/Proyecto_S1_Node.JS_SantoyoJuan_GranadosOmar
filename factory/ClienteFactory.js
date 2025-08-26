// factory/ClienteFactory.js
// Funciones puras para crear/normalizar el payload de un cliente
function createClienteFactory(data) {
	if (!data || typeof data !== 'object') throw new Error('Datos de cliente requeridos');

	const nombre = String(data.nombre || '').trim();
	const correo = String(data.correo || '').trim();

	if (!nombre) throw new Error('Nombre de cliente requerido');
	if (!/\S+@\S+\.\S+/.test(correo)) throw new Error('Correo inválido');

	return {
		nombre,
		correo,
		empresa: data.empresa ? String(data.empresa).trim() : null
	};
}

module.exports = { createClienteFactory };
