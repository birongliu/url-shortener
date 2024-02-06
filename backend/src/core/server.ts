import * as express from "express"
export default class Server {
    private app: express.Application;
    constructor() {
        this.app = express()
    }

    public listen() {
        console.log(`Listening on port ${process.env.PORT}`)
        this.app.listen(process.env.PORT)
    }
}