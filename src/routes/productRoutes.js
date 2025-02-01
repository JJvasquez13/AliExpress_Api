const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const {
  createProduct,
  getProducts,
} = require("../controllers/productController");
const upload = require("../middleware/uploadMiddleware");

const router = express.Router();

// Ruta pública para obtener productos
router.get("/", getProducts);

// Ruta protegida para subir un producto con imagen
// Se usa upload.single("image") para procesar un solo archivo cuyo campo se llama "image"
router.post("/", protect, upload.single("image"), createProduct);

module.exports = router;
