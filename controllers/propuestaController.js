const { connectDB } = require("../db.js");
const Proposal = require("../models/Proposal.js");
const Project = require("../models/Project.js");

class ProposalService {
  static async create(data) {
    const db = await connectDB();
    const proposal = new Proposal(data);
    await db.collection("proposals").insertOne(proposal);
    return proposal;
  }

  static async aceptar(proposalId) {
    const db = await connectDB();
    const proposal = await db.collection("proposals").findOne({ _id: proposalId });
    if (!proposal) throw new Error("Propuesta no encontrada");

    await db.collection("proposals").updateOne(
      { _id: proposalId },
      { $set: { estado: "aceptada" } }
    );

    // Crear proyecto automáticamente
    const project = new Project({
      clienteId: proposal.clienteId,
      propuestaId: proposalId,
      nombre: "Proyecto generado"
    });
    await db.collection("proyectos").insertOne(project);
    return project;
  }
}
module.exports = ProposalService;