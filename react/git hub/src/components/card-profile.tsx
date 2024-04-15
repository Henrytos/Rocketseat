import { Building, Github, Users } from "lucide-react";
import { Card } from "./card";
import { Title } from "./title";
import { Text } from "./text";
import { GithubUser } from "../types/github-use";

interface CardProfileProps {
  githubUser: GithubUser;
}

export function CardProfile({ githubUser }: CardProfileProps) {
  return (
    <Card className="flex gap-8 -translate-y-1/2">
      <img
        className=" rounded-lg w-36 h-36 object-cover block "
        src={githubUser.avatar_url}
        alt={`imagem de perfil de ${githubUser.name}`}
      />
      <div className="space-y-6  flex-1">
        <div className="space-y-2">
          <Title>{githubUser.name}</Title>
          <Text>{githubUser.bio}</Text>
        </div>
        <div className="w-full flex gap-6">
          <div className="flex items-center gap-2">
            <Github className="w-5 h-5 text-base-label" />
            <Text className="text-base-subtitle">{githubUser.name}</Text>
          </div>
          <div className="flex items-center gap-2">
            <Building className="w-5 h-5 text-base-label" />
            <Text className="text-base-subtitle">{githubUser.company}</Text>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-base-label" />
            <Text className="text-base-subtitle">{githubUser.followers}</Text>
          </div>
        </div>
      </div>
    </Card>
  );
}
