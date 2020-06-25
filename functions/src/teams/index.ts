import * as functions from 'firebase-functions';
import { TeamsService } from './teams.service';

export const teams = functions.region('us-east1').https.onRequest(async (request, response) => {

    const service = new TeamsService(request);

    const res = await service.execute()
    .catch(error => {response.send(error)});

    response.send(res);
});