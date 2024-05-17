import fastify from "fastify";
import { routesApp } from "./http/routes";
import cookie from '@fastify/cookie'

export const app = fastify()

app.register(cookie)

app.register(routesApp,{
    prefix:'snack'
})