import {createServer, Server, IncomingMessage, ServerResponse} from "http";

import dotenv from "dotenv";
dotenv.config();

import app from "./app";

const PORT = process.env.PORT || 3000;

const server: Server<typeof IncomingMessage, typeof ServerResponse> = createServer(app);

server.listen(PORT, () => {
    console.log("Project init in port ", PORT);
});