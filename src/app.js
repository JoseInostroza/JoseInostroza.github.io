import express from "express";
import cors from "cors";
import upload from "express-fileupload";
import { create } from "express-handlebars";

//rutas vistas
import viewRoutes from "./routes/views.routes.js";

//rutas endpoints

//general seting
import * as path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

//midlewears
app.use(express.json());  //procesar json
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(upload()); //procesar form data
//config public

app.use(express.static(__dirname + "/public"));

//config express handlebars

const hbs = create({
    partialsDir: [path.resolve(__dirname, "views/partials/")],
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", path.resolve(__dirname, "./views"));

//configurando tailwind

//Uso de Vistas
//home
app.use("/", viewRoutes);
//main
app.use("/main", viewRoutes)
//tienda
app.use("/tienda", viewRoutes)
//taberna
app.use("/taberna", viewRoutes)
//rejistro personajes
app.use("/registro", viewRoutes)
//ayuda
app.use("/ayuda", viewRoutes)

//VISTA error
app.get("*", (req, res) => {
    res.render("error");
});

export default app