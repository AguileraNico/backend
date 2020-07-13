import { ProdeController } from "./prode.controller"


export class ProdeService {
    private controller = new ProdeController();

    constructor(private req: any) { }

    public async execute(): Promise<any> {
        switch(this.req.url) {
            case '/save-user-match': {
                return await this.controller.saveUserMatch(this.req.body);
            }
            case '/user-fixture': {
                return await this.controller.userFixture(this.req.body);
            }
            case '/user-history': {
                return await this.controller.userHistory(this.req.body);
            }
        }
    }

}