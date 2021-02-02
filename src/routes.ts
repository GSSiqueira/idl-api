import { Router } from "express";

import authMiddleware from "../src/middlewares/authMiddleware";
import { CategoryController } from "./controllers/CategoryController";
import { EntryController } from "./controllers/EntryController";
import UserController from "./controllers/UserController";

const router = Router();
const entryController = new EntryController();
const categoryController = new CategoryController();
const userController = new UserController();

router.get("/protected", authMiddleware, categoryController.listAllCategories);
//User
router.post("/auth", userController.authenticateUser);
router.post("/newuser", userController.addNewUser);

//Entries
router.get("/entradas/data/:date", entryController.listDailyEntriesByDate);
router.get("/entradas/:entryId", entryController.findEntryById);
router.post("/entradas", entryController.addNewEntry);
router.delete("/entradas/:entryId", entryController.removeEntry);
router.get("/fixos/:month", entryController.listRegularExpenseEntriesByMonth);

//Categories
router.get("/categorias", categoryController.listAllCategories);
router.get("/categorias/:categoryId", categoryController.findCategoryById);
router.get("/categorias/type/:type", categoryController.listCategoriesByType);
router.post("/categorias", categoryController.addNewCategory);
router.delete("/categorias/:categoryId", categoryController.removeCategory);

export default router;
