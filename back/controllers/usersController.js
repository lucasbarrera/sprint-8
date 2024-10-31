const db = require("../database/models"); // Asegúrate de que esta ruta sea correcta
const usersController = {
  userList: null,
  user: null,
  allUsers: async (req, res) => {
    let { page = 1, limit = 5 } = req.query;
    page = parseInt(page);
    limit = parseInt(limit);
    try {
      const { count, rows: users } = await db.Usuario.findAndCountAll({
        limit: limit,
        offset: (page - 1) * limit,
      });
      const totalPages = Math.ceil(count / limit);
      res.json({
        currentPage: page,
        totalPages,
        totalUsers: count,
        users,
      });
    } catch (error) {
      res.status(500).json({ error: "Error al obtener los usuarios" });
    }
  },
  showById: async function (req, res) {
    db.Usuario.findByPk(req.params.id).then((usuario) => {
      return res.json(usuario);
    });
  },
  lastClients: (req, res) => {
    db.Usuario.findAll({
      order: [["id", "DESC"]],
      limit: 3,
    })
      .then((users) => {
        res.json({
          users,
          currentPage: 1,
          totalPages: 1,
        });
      })
      .catch((error) => console.error(error));
  },
};

module.exports = usersController;
