import { SubTitle } from "../sub-title";
import { Text } from "../text";

export function SearchFormRepositorys() {
  return (
    <form action="" className="space-y-3 mb-12">
      <div className="flex items-center justify-between">
        <SubTitle>Publicações</SubTitle>

        <Text className="text-sm text-base-span">Há 6 publicações</Text>
      </div>

      <input
        type="text"
        placeholder="Buscar conteúdo"
        className="w-full bg-base-input rounded-md text-base-label text-base py-3 px-4"
      />
    </form>
  );
}
