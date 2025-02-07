const Product = require("../models/Product");

const createProduct = async (req, res) => {
  try {
    // Extraemos otros campos del body
    const { name, price, description } = req.body;

    // Verificamos que se haya subido una imagen
    if (!req.file) {
      return res.status(400).json({ message: "La imagen es obligatoria" });
    }

    // Si se subió, obtenemos la ruta del archivo (puedes guardar la ruta relativa o absoluta)
    const image = req.file.path; // Ejemplo: "src/uploads/167253123123-foto.jpg"

    // Crear el producto asignando la imagen y el usuario que lo creó (req.user se obtuvo en el middleware)
    const product = await Product.create({
      name,
      price,
      description,
      image,
      user: req.user._id,
    });

    res.status(201).json(product);
  } catch (error) {
    console.error("Error al crear producto:", error);
    res.status(500).json({ message: "Error en el servidor", error });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    // Modificar cada producto para agregar la URL completa de la imagen
    const updatedProducts = products.map((product) => ({
      ...product._doc,
      image: `${req.protocol}://${req.get("host")}/${product.image}`,
      // Esto genera algo como: http://localhost:5000/uploads/167253123123-foto.jpg
    }));

    res.json(updatedProducts);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener productos", error });
  }
};

module.exports = { createProduct, getProducts };
