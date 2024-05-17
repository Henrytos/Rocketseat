import fastify from "fastify";
import { routesApp } from "./http/routes";


export const app = fastify()

app.register(routesApp)