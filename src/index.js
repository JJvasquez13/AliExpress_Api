require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();

// Conectar a MongoDB
connectDB();

// Middlewares para Rutas
app.use(cors());
app.use(express.json());
// Rutas Usuario
app.use("/api/users", userRoutes);
// Rutas Productos
app.use("/api/products", productRoutes);

// Servir la carpeta de imágenes (ajustar la ruta si se utiliza "src/uploads" u otra)
app.use("/uploads", express.static("src/uploads"));

/*De este modo, si un producto tiene la imagen almacenada en 
src/uploads/167253123123-foto.jpg, 
se podrá acceder a ella mediante:
http://localhost:5000/uploads/167253123123-foto.jpg
*/

// Ruta principal
app.get("/", (req, res) => {
  res.send("API funcionando...");
});

// Puerto del servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
