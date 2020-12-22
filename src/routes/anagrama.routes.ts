import {Router} from 'express';
import { index} from '../service/anagramaService';

const routeAnagrama = Router();
const anagramaService = new index();

routeAnagrama.post('/',anagramaService.execute);
// routeAnagrama.post('/',(request, response) => {

//     console.log(request.body)
//     //const {text} = request.body;

// });

export { routeAnagrama}