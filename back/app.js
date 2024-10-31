const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const rutaUsers = require("./routes/users.js");
const rutaProducts = require("./routes/products.js");
const rutaMain = require("./routes/main.js");
const rutaCategorias = require("./routes/categorias.js");
const cors = require("cors");
const rutaMarcas = require("./routes/marcas.js");
app.use(express.json());
app.use(cors());

app.use("/users", rutaUsers);
app.use("/productos", rutaProducts);
app.use("/marcas", rutaMarcas);
app.use("/categorias", rutaCategorias);
app.use("/", rutaMain);

app.listen(port, () => {
  console.log("Servidor corriendo en el puerto 8080");
});
