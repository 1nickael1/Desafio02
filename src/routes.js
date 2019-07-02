import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => res.json({ ola: 'ola' }));

export default routes;
