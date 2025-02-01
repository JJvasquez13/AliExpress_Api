const multer = require("multer");
const path = require("path");

// Configurar el almacenamiento
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // La carpeta donde se guardarán las imágenes
    cb(null, "src/uploads/");
  },
  filename: function (req, file, cb) {
    // Renombra el archivo para evitar conflictos: usa fecha + nombre original
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// Filtro para aceptar solo ciertos tipos de archivo (por ejemplo, imágenes)
const fileFilter = (req, file, cb) => {
  const fileTypes = /jpeg|jpg|png|gif/;
  const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimeType = fileTypes.test(file.mimetype);

  if (extname && mimeType) {
    return cb(null, true);
  } else {
    cb(new Error("Sólo se permiten imágenes (jpeg, jpg, png, gif)"));
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 1024 * 1024 * 5 }, // Límite de 5 MB
});

module.exports = upload;
