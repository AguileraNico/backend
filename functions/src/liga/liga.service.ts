import { LigaController } from "./liga.controller"


export class LigaService {
    private controller = new LigaController();

    constructor(private req: any) { }

    public async execute(): Promise<any> {
        switch(this.req.url) {
            case '/positions': {
                console.log('positions');
                return await this.controller.positions(this.req.body);
            }
            case '/fixture': {
                console.log('fixture');
                return await this.controller.fixture(this.req.body);
            }
            case '/promedios': {
                console.log('promedios');
                return await this.controller.promedios(this.req.body);
            }
            case '/teams': {
                console.log('teams');
                return await this.controller.teams(this.req.body);
            }
        }
    }

}