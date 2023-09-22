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

//config express handlebars

const hbs = create({
    partialsDir: [path.resolve(__dirname, "views/partials/")],
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", path.resolve(__dirname, "./views"));
app.get(["/", "/home"],()=>{
    
})

//Uso de Vistas
app.use("/", viewRoutes);

//VISTA error
app.get("*", (req, res) => {
    res.render("notFound");
});

export default app