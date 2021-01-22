import { Router } from 'express';

/** Controllers */
import AlunosController from '../app/controllers/AlunoController';
/**  * */

const routes = new Router();

routes.get('/alunos', AlunosController.index);
routes.post('/alunos', AlunosController.create);
routes.put('/alunos', AlunosController.update);
routes.delete('/alunos', AlunosController.delete);


export default routes;
