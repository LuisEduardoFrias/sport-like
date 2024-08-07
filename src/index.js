//
import express from "express";
import cors from "cors";
import gateway from "api_httpc";
import _static from 'serve-static';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import cookieparser from "cookie-parser";
//
import { PORT } from "./config.js";
import products from "./routes/products.js";
import register from "./routes/register.js";
//
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

//settings
app.disabled("x-powered-by");
app.set("port", PORT);

//middlewares
app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieparser());
app.use(cors());

const gate = new gateway(app, path.resolve(__dirname, '..'));

const bodyRequire = ["userName", "password"];

gate.routes('/', products);
gate.routes('/', register);



gate.listen(() => console.log(`server on port:${PORT}`));