import { SnacksRepository } from "@/repositories/snacks-repository";

export class DeleteSnackUseCase {
    constructor(private snacksRepository:SnacksRepository) { }
    async execute(id:string, session_id:string) {
        await this.snacksRepository.findSnackById(id, session_id);}
    }