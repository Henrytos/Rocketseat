import { PrismaSnacksRepository } from "@/repositories/prisma-snacks-repository";
import { CreateSnackUseCase } from "@/use-cases/create-snack-use-case";
import { randomUUID } from "crypto";
import { FastifyReply, FastifyRequest } from "fastify";
import{z} from 'zod'

    export async function  createSnackController (request:FastifyRequest,reply:FastifyReply){

        const bodyRequestSchema = z.object({
            name: z.string(),
            description:z.string(),
            date_and_time:z.coerce.date(),
            is_inside:z.boolean()
        }) 
        
        let session_id = request.cookies['session_id'];
        if (!session_id) {
            session_id = randomUUID().toString();
            reply.setCookie('session_id', session_id, {
                path: '/',
                maxAge: 60 * 60 * 24 * 7 // 7 days
            });
        }
        
        const { name,description,date_and_time,is_inside } = bodyRequestSchema.parse(request.body)
        const prismaSnacksRepository= new PrismaSnacksRepository()
        const createSnackUseCase = new CreateSnackUseCase(prismaSnacksRepository)
        await createSnackUseCase.execute({name,description,date_and_time,is_inside,session_id})
       
        return reply.status(201).send()
    }
