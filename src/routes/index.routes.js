import { Router } from "express";
import {
  createTask,
  editTask,
  deleteTask,
  endeditTask,
  goToHome,
  renderConfig,
  renderMen,
  renderWomen,
  about,
} from "../controllers/task.controller";
const router = Router();

router.get("/", goToHome);

router.get('/config', renderConfig);

router.post("/task/add", createTask);

router.get("/edit/:id", editTask);

router.post("/edit/:id", endeditTask);

router.get("/delete/:id", deleteTask);

router.get("/men", renderMen);

router.get("/women", renderWomen);

router.get("/about", about);
export default router;
