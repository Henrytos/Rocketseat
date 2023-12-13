export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const data = await fetch("https://api.github.com/users/henrytos");
  const response = await data.json();
  return (
    <main>
      {" "}
      <h1>home</h1>
      <pre>{JSON.stringify(response, null, 2)}</pre>
    </main>
  );
}
