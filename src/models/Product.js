const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "El nombre del producto es obligatorio"],
    },
    price: {
      type: Number,
      required: [true, "El precio es obligatorio"],
    },
    description: {
      type: String,
      required: [true, "La descripción es obligatoria"],
    },
    image: {
      type: String,
      required: [true, "La imagen es obligatoria"],
    },
    // Referencia al usuario que creó el producto (opcional, para identificar al dueño)
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true, // Crea campos createdAt y updatedAt automáticamente
  }
);

module.exports = mongoose.model("Product", productSchema);
