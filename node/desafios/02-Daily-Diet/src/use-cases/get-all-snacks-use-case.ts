import { SnacksRepository } from "@/repositories/snacks-repository";


export class GetAllSnacksUseCase{

    constructor(private snacksRepository:SnacksRepository){}

    async execute(session_id:string){
        const snacks = await this.snacksRepository.findAllSnacks(session_id)
        return snacks
    }
}