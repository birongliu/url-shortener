import "dotenv/config";
import Server from "./server";

export { Server }

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT: string
        }
    }
}