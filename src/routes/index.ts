import {Router} from 'express';
import {routeAnagrama} from './anagrama.routes';

const routes = Router();
routes.use('/anagramas',routeAnagrama);

export {routes};