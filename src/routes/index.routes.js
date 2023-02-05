import { Router } from "express";
import {
  createTask,
  editTask,
  deleteTask,
  togleTask,
  endeditTask,
  goToHome,
  renderConfig,
  renderMen,
  renderWomen,
  about,
} from "../controllers/task.controller";
const router = Router();

router.get("/", renderConfig);

router.get('/home', goToHome);

router.post("/task/add", createTask);

router.get("/edit/:id", editTask);

router.post("/edit/:id", endeditTask);

router.get("/delete/:id", deleteTask);

router.get("/togle/:id", togleTask);

router.get("/men", renderMen);

router.get("/women", renderWomen);

router.get("/about", about);
export default router;
