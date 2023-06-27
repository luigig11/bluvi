import express, {Express, Request, Response} from "express";

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
    console.log(`request URL: ${req.url}`);
    res.send("Hello");    
});

export default app;