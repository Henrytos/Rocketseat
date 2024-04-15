import { SearchFormRepositorys } from "../components/search-form-repositorys";
import { CardProfile } from "../components/card-profile";
import { RepositoryContent } from "../components/repositorys/repository-content";
import { RepositoryItem } from "../components/repositorys/repositoy-item";
import { Container } from "../components/container";

export function HomePage() {
  return (
    <>
      <Container>
        <CardProfile />

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
