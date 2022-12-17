import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import indexRoute from "./routes/index.js";
// get dice que hacer cuando se solicita datos
// set es para decirle al servidor que caracteristicas
// queremos utilizar

const app = express();

// Para que encuentre views hay que poner la ruta absoluta
// esto se puede hacer con module path y url para q sea dinamica
const __dirname = dirname(fileURLToPath(import.meta.url));

app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(indexRoute);

app.listen(3000);
console.log(`Server working in port ${3000}`);
