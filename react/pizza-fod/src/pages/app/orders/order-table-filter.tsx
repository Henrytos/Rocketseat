import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { SelectValue } from "@radix-ui/react-select";
import { Search, X } from "lucide-react";

export function OrderFilter() {
  return (
    <form className="flex items-center gap-2">
      <span className="text-sm font-semibold">Filtros:</span>
      <Input placeholder="Nome do cliente" className="h-8 w-[320px]" />
      <Input placeholder="ID do pedido" className="h-8 w-auto" />
      <Select defaultValue="all">
        <SelectTrigger className="h-8 w-44">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todos status</SelectItem>
          <SelectItem value="pending">Pendente</SelectItem>
          <SelectItem value="canceled">Cancelado</SelectItem>
          <SelectItem value="processing">Em preparo</SelectItem>
          <SelectItem value="delivering">Em entrega</SelectItem>
          <SelectItem value="delivered">Entregue</SelectItem>
        </SelectContent>
      </Select>
      <Button type="submit" variant="outline">
        <Search className="w-4 h-4 mr-2" />
        Filtrar resultados
      </Button>
      <Button type="button" variant="outline">
        <X className="w-4 h-4 mr-2" />
        Remover filtros
      </Button>
    </form>
  );
}
