import * as functions from 'firebase-functions';
import { TeamsService } from './teams.service';

export const teams = functions.region('us-east1').https.onRequest(async (request, response) => {

    const service = new TeamsService(request);

    await service.execute()
    .then(value => response.status(200).send(value))
    .catch(value => response.status(500).send(value));
    
});