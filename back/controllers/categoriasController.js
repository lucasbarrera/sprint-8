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
        attributes: ["id", "categoria", "nivel", "parent_id"],
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
      res.status(500).json({ error: error.message || "Error en el servidor" });
    }
  },
  // uniqueValues: async (req, res) => {
  //   let { page = 1, limit = 5 } = req.query;
  //   page = parseInt(page);
  //   limit = parseInt(limit);
  //   try {
  //     const uniqueValues = await db.Categoria.findAll({
  //       attributes: [
  //         [Sequelize.fn("DISTINCT", Sequelize.col("categoria")), "categoria"],
  //       ],
  //     });
  //     // console.log(uniqueValues);

  //     // Mapea los resultados para devolver solo los valores únicos en formato JSON
  //     const uniqueValuesArray = uniqueValues.map((item) => item);
  //     console.log(uniqueValuesArray);

  //     res.json({
  //       uniqueValuesArray,
  //       currentPage: page,
  //       totalPages,
  //       totalCategories: count,
  //     });
  //   } catch (error) {
  //     console.error("Error en la consulta:", error); // Loguea el error en la consola del servidor
  //     res.status(500).json({ error: error.message || "Error en el servidor" });
  //   }
  // },
};
module.exports = categoriasController;
