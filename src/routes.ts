import { Router } from 'express';
import { EntryController } from './controllers/EntryController';

const router = Router();
const entryController = new EntryController();

router.get('/entradas', (request, response) => {
  entryController.listEntriesByDate(request.body);
  response.json({ message: 'Listar Entradas de uma certa data.' });
});
router.post('/entradas', (request, response) => {
  entryController.addNewEntry(request.body);
  response.json({ message: 'Adicionar uma nova entrada para certa data.' });
});

router.get('/fixos', (request, response) => {
  entryController.listRegularExpenseEntriesByMonth(request.body);
  response.json({
    message: 'Listar Apenas as entradas de Despesa Fixa para um certo mês.',
  });
});

router.get('/categorias', (request, response) =>
  response.json({ message: 'Listar todas as Categorias das entradas.' })
);
router.post('/categorias', (request, response) => {
  console.log(request.body);
  response.json({ message: 'Adicionar uma nova cateogria.' });
});

export default router;
