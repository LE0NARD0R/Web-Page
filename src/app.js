import express from "express";
import { create } from "express-handlebars";
import indexRoutes from "./routes/index.routes";
import path from "path";
import morgan from "morgan";

const app = express();

app.set("views", path.join(__dirname, "views"));

//Motor de plantilla
const exphbs = create({
  layoutsDir: path.join(app.get("views"), "layouts"),
  partialsDir: path.join(app.get("views"), "partials"),
  defaultLayout: "main",
  extname: ".hbs",
});

app.engine(".hbs", exphbs.engine);
app.set("view engine", ".hbs");

//Middleware
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));

//Routes
app.use(indexRoutes);
export default app;
