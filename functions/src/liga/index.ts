import * as functions from 'firebase-functions';
import { LigaService } from './liga.service';

export const liga = functions.region('us-east1').https.onRequest(async (request, response) => {

    const service = new LigaService(request);
    await service.execute()
    .then(value => 
        response.setTimeout(60000).status(200)
        .header("Access-Control-Allow-Origin", "*")
        .header('Access-Control-Allow-Headers', 'Content-Type')
        .send(value.body))
    .catch(value => response.status(500).header("Access-Control-Allow-Origin", "*").send(value));
    
});