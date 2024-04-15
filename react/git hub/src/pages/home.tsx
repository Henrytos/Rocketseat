import { SearchFormRepositorys } from "../components/search-form-repositorys";
import { CardProfile } from "../components/card-profile";
import { RepositoryContent } from "../components/repositorys/repository-content";
import { RepositoryItem } from "../components/repositorys/repositoy-item";
import { Container } from "../components/container";
import { useQuery } from "react-query";
import { api } from "../lib/api";
import { GithubUser } from "../types/github-use";

export function HomePage() {
  const { data, isLoading } = useQuery("user", async () => {
    const data = await api.get("/users/Henrytos");
    const user: GithubUser = data.data;
    return user;
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  const githubUser = data as GithubUser;

  console.log(githubUser);
  return (
    <>
      <Container>
        <CardProfile githubUser={githubUser} />

        <SearchFormRepositorys />

        <RepositoryContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <RepositoryItem key={index} />
          ))}
        </RepositoryContent>
      </Container>
    </>
  );
}
