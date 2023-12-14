export async function GitHubProfile() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const data = await fetch("https://api.github.com/users/henrytos");
  const response = await data.json();
  return (
    <>
      <pre>{JSON.stringify(response, null, 2)}</pre>
    </>
  );
}
