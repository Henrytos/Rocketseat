import { SnacksRepository } from "@/repositories/snacks-repository";

export class GetOneSnacksUseCase {
    constructor(private snacksRepository:SnacksRepository) { }
    async execute(id:string,session_id:string) {
        const snack = await this.snacksRepository.findSnackById(id,session_id);
        return snack;
    }
}