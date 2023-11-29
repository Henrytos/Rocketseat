export default function History() {
  return (
    <div className="w-full max-w-5xl m-auto">
      <h1 className="font-extrabold text-2xl pb-8">Meu histórico</h1>
      <table className="w-full">
        <thead>
          <tr className="flex w-full justify-between">
            <th>Tarefa</th>
            <th>Duração</th>
            <th>Inicio</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className="">
          <tr>
            <td>João</td>
            <td>00:00:00</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>João</td>
            <td>00:00:00</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>João</td>
            <td>00:00:00</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>João</td>
            <td>00:00:00</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>João</td>
            <td>00:00:00</td>
            <td>0</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
