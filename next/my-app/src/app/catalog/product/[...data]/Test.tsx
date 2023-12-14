export async function Test() {
  const data = await fetch("https://api.github.com/users/henrytos");
  const response = await data.json();
  return (
    <>
      <h1>Test</h1>
      <pre>{JSON.stringify(response, null, 2)}</pre>
    </>
  );
}
