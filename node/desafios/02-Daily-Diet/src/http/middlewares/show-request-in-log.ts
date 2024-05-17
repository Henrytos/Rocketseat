import { FastifyReply, FastifyRequest } from "fastify";

export async function showRequestInLog(request:FastifyRequest,reply:FastifyReply){
    console.log(`[ ${request.method}] ${request.url}`)
}