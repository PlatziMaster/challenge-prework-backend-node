const express = require("express"),
  dotenv = require("dotenv/config"),
  path = require("path"),
  app = express(),
  port = process.env.PORT || 3000;

const productRoutes = require("./routes/products.routes");

app.get("/", (req, res) => {
  let userInfo = req.header("user-agent");
  res.send(`UserInfo: ${userInfo}`);
});

app.get("/receipts", (req, res, next) => {
  // El nombre de la carpeta assets estaba mal escrito.
  let file = path.join(__dirname, "assets", "receipt.pdf");
  // Faltaba pasar como argumento la ruta del archivo a mostrar cuando la ruta sea requerida.
  res.sendFile(file, (error) => {
    if (error) {
      next(error);
    }
  });
});

// Este middleware ayudara a que se puedan leer los datos del body en la peticion.
app.use(express.json());

// Para ver todos los productos del mock sera necesario ir a la siguiente ruta:
// http://localhost:PUERTO/api/products
app.use("/api/products", productRoutes);

// Manejador de errores basico.
app.use(function (err, req, res, next) {
  res.status(404);
  res.json({
    error: err,
    message: "Something went wrong, try again!",
  });
});

app.listen(port, (err) => {
  if (err) {
    console.error("Error: ", err);
    return;
  }
  console.log(`Listening http://localhost:${port}`);
});
