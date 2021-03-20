import { Router } from "express";

import authMiddleware from "../src/middlewares/authMiddleware";
import { CategoryController } from "./controllers/CategoryController";
import { EntryController } from "./controllers/EntryController";
import UserController from "./controllers/UserController";

const router = Router();
const entryController = new EntryController();
const categoryController = new CategoryController();
const userController = new UserController();

//Teste
router.get("/protected", authMiddleware, categoryController.listAllCategories);

//User
router.post("/auth", userController.authenticateUser);
router.post("/newuser", authMiddleware, userController.addNewUser);

//Entries
router.get("/entradas/:entryId", authMiddleware, entryController.findEntryById);
router.get(
  "/entradas/data/:date",
  authMiddleware,
  entryController.listDailyEntriesByDate
);
router.get("/mensal/:date", authMiddleware, entryController.listEntriesByMonth);
router.post("/entradas", authMiddleware, entryController.addNewEntry);
router.delete(
  "/entradas/:entryId",
  authMiddleware,
  entryController.removeEntry
);

//Categories
router.get("/categorias", authMiddleware, categoryController.listAllCategories);
router.get(
  "/categorias/:categoryId",
  authMiddleware,
  categoryController.findCategoryById
);
router.get(
  "/categorias/tipo/:type",
  authMiddleware,
  categoryController.listCategoriesByType
);
router.post("/categorias", authMiddleware, categoryController.addNewCategory);
router.delete(
  "/categorias/:categoryId",
  authMiddleware,
  categoryController.removeCategory
);

export default router;
