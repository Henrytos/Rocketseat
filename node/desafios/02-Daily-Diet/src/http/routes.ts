import { FastifyInstance } from "fastify";

export async function routesApp(app:FastifyInstance){
    app.post('/',async (request,reply)=>{
        console.log('hello')
        return reply.status(201).send() 
    })
}