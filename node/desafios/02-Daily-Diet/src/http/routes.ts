import { prisma } from "@/lib/prisma";
import { FastifyInstance } from "fastify";
import { z } from 'zod'

export async function routesApp(app:FastifyInstance){
    app.post('/snack',async (request,reply)=>{
        const bodyRequestSchema = z.object({
            name: z.string(),
            description:z.string(),
            date_and_time:z.coerce.date(),
            is_inside:z.boolean()
        }) 
        
        const { name,description,date_and_time,is_inside} = bodyRequestSchema.parse(request.body)
        
        await prisma.
    })
}