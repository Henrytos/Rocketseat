import fastify from "fastify";
import { routesApp } from "./http/routes";
import cookie from '@fastify/cookie'
import { showRequestInLog } from "./http/middlewares/show-request-in-log";
import { env } from "./env";

export const app = fastify()

app.register(cookie)

if(env.NODE_ENV === 'development'){
    app.addHook('onRequest',showRequestInLog)
}

app.register(routesApp,{
    prefix:'snack'
})