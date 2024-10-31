const db = require("../database/models");
const productsController = {
  showAll: async (req, res) => {
    let { page = 1, limit = 5 } = req.query;
    page = parseInt(page);
    limit = parseInt(limit);
    try {
      const { count, rows: productos } = await db.Producto.findAndCountAll({
        limit: limit, // Número de productos por página
        offset: (page - 1) * limit, // Saltar productos según la página
      });

      const totalPages = Math.ceil(count / limit);

      res.json({
        productos,
        currentPage: page,
        totalPages,
        totalProducts: count,
      });
    } catch (error) {
      res.status(500).json({ error: "Error al obtener los productos" });
    }
  },
  showById: async function (req, res) {
    db.Producto.findByPk(req.params.id, {
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
  showLastAdd: (req, res) => {
    let { page = 1, limit = 3 } = req.query;
    limit = parseInt(limit);
    page = parseInt(page);
    const { rows: productos } = db.Producto.findAll({
      order: [["id", "DESC"]],
      limit: 3,
      include: [
        {
          model: db.Talle,
          attributes: ["descripcion"],
          as: "talle",
        },
        {
          model: db.Marca,
          attributes: ["descripcion"],
          as: "marca",
        },
      ],
    })
      .then((productos) => {
        res.json({
          currentPage: page,
          totalPages: 1,
          productos,
        });
      })
      .catch((error) => console.error(error));
  },
};
module.exports = productsController;
