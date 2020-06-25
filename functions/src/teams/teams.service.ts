import { TeamsController } from "./teams.controller"


export class TeamsService {
    private controller = new TeamsController();

    constructor(private req: any) { }

    public async execute(): Promise<any> {
        return await this.controller.posiciones(this.req.body);
    }

}