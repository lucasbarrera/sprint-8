const db = require("../database/models");
const marcasController = {
  showAll: async (req, res) => {
    let { page = 1, limit = 5 } = req.query;
    page = parseInt(page);
    limit = parseInt(limit);
    try {
      const { count, rows: marcas } = await db.Marca.findAndCountAll({
        limit: limit, // Número de productos por página
        offset: (page - 1) * limit, // Saltar productos según la página
      });

      const totalPages = Math.ceil(count / limit);

      res.json({
        currentPage: page,
        totalPages,
        totalMarcas: count,
        marcas,
      });
    } catch (error) {
      res.status(500).json({ error: "Error al obtener las marcas" });
    }
  },
  showById: async function (req, res) {
    db.Marca.findByPk(req.params.id, {
      include: [
        {
          model: db.Talle,
          atributes: ["descripcion"],
          as: "talle",
        },
        {
          model: db.Marca,
          atributes: ["descripcion"],
          as: "marca",
        },
      ],
    }).then((producto) => {
      return res.json(producto);
    });
  },
};
module.exports = marcasController;
