"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app_1 = __importDefault(require("./app"));
const PORT = process.env.PORT || 3000;
const server = (0, http_1.createServer)(app_1.default);
server.listen(PORT, () => {
    console.log("Project init in port ", PORT);
});
//# sourceMappingURL=server.js.map