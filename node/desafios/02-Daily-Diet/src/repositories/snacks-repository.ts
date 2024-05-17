import { Prisma, Snack } from "@prisma/client";

export interface SnacksRepository{
    create(data:Prisma.SnackCreateInput):Promise<Snack>
    findSnackById(id:string,session_id:string):Promise<Snack | null>
    findAllSnacks(session_id:string):Promise<Snack[]>
    updateSnackById(id:string,session_id:string,data:Prisma.SnackUpdateInput):Promise<Snack | null>
}