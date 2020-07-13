import { LigaController } from "./liga.controller"


export class LigaService {
    private controller = new LigaController();

    constructor(private req: any) { }

    public async execute(): Promise<any> {
        switch(this.req.url) {
            case '/positions': {
                return await this.controller.positions(this.req.body);
            }
            case '/fixture': {
                return await this.controller.fixture(this.req.body);
            }
            case '/last-round': {
                return await this.controller.lastRound(this.req.body);
            }
            case '/promedios': {
                return await this.controller.promedios(this.req.body);
            }
            case '/teams': {
                return await this.controller.teams(this.req.body);
            }
        }
    }

}