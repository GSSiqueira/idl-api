import { Router } from 'express';
import { CategoryController } from './controllers/CategoryController';
import { EntryController } from './controllers/EntryController';
import UserController from './controllers/UserController';

const router = Router();
const entryController = new EntryController();
const categoryController = new CategoryController();
const userController = new UserController();

router.post('/auth', userController.authenticateUser);

router.get('/entradas/data/:date', entryController.listDailyEntriesByDate);
router.get('/entradas/:entryId', entryController.findEntryById);
router.post('/entradas', entryController.addNewEntry);
router.delete('/entradas/:entryId', entryController.removeEntry);

router.get('/fixos/:month', entryController.listRegularExpenseEntriesByMonth);

router.get('/categorias', categoryController.listAllCategories);
router.get('/categorias/:categoryId', categoryController.findCategoryById);
router.get('/categorias/type/:type', categoryController.listCategoriesByType);
router.post('/categorias', categoryController.addNewCategory);
router.delete('/categorias/:categoryId', categoryController.removeCategory);

export default router;
