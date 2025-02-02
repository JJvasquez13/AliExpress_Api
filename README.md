# AliExpress_Api

Api creada para laboratorio de Desarrollo de aplicaciones moviles.

Tiene la funcionabilidad de un registro de usuario, login, ademas de la capacidad de crear tipo los productos que estan a la venta como funciona en AliExpress.
Está hecha con express, node.js y MongoDB.

De momento no tiene algun filtro para buscar algun producto en si, pero se puede agregar, por otro lado se pueden subir imagenes pero de manera local, puede no ser la mejor manera pero es la que funciona por ahora.

Para correr el proyecto es necesario esar el comando:

* npm run dev *

Se usan librerias como multer para imagenes, bcrypt para encriptar contraseñas, jsonwebtoken para el token de autenticacion, y mongoose para la base de datos, tembien se usan las librerias de express y body-parser para el manejo de peticiones ademas de middleware para el manejo seguro de rutas.