const db = require("../database/models");
const { Sequelize } = require("sequelize");
const categoriasController = {
  showAll: async (req, res) => {
    let { page = 1, limit = 5 } = req.query;
    page = parseInt(page);
    limit = parseInt(limit);
    try {
      const { count, rows: categorias } = await db.Categoria.findAndCountAll({
        limit: limit,
        offset: (page - 1) * limit,
        attributes: [
          "id", "categoria",
        ],
        group: ["categoria"],
        order: [["id", "ASC"]],
      });

      const totalPages = Math.ceil(count.length / limit);

      res.json({
        categorias,
        currentPage: page,
        totalPages,
        totalCategories: count.length,
      });
    } catch (error) {
      res.status(500).json({ error: "Error al obtener las categorias" });
    }
  },

};
module.exports = categoriasController;
