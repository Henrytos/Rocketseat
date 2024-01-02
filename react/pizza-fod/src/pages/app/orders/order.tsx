import { Table, TableBody, TableHead } from "@/components/ui/table";
import { Helmet } from "react-helmet-async";
import { OrderTableRow } from "./order-table-row";
import { OrderFilter } from "./order-table-filter";

export function Orders() {
  return (
    <>
      <Helmet title="pedidos" />
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
        <OrderFilter />
        <Table className="border">
          <TableHead className="w-[64px]"></TableHead>
          <TableHead className="w-[140px]">Identificador</TableHead>
          <TableHead className="w-[180px]">Realizado há</TableHead>
          <TableHead className="w-[140px]">Status</TableHead>
          <TableHead>Cliente</TableHead>
          <TableHead className="w-[140px]">Total do pedido</TableHead>
          <TableHead className="w-[164px]"></TableHead>
          <TableHead className="w-[132px]"></TableHead>
          <TableBody>
            {Array.from({ length: 10 }).map((_, i) => (
              <OrderTableRow key={i} />
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
