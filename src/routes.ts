import { Router } from 'express';
import { CategoryController } from './controllers/CategoryController';
import { EntryController } from './controllers/EntryController';

const router = Router();
const entryController = new EntryController();
const categoryController = new CategoryController();

router.get('/entradas', entryController.listDailyEntriesByDate);
router.get('/entradas/:entryId', entryController.findEntryById);
router.post('/entradas', entryController.addNewEntry);
router.delete('/entradas', entryController.removeEntry);

router.get('/fixos', entryController.listRegularExpenseEntriesByMonth);

router.get('/categorias', categoryController.listAllCategories);
router.post('/categorias', categoryController.addNewCategory);
router.delete('/categorias', categoryController.removeCategory);

export default router;
