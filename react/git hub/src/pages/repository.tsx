import { Link, useParams } from "react-router-dom";
import { Container } from "../components/container";
import { Title } from "../components/title";
import { Card } from "../components/card";
import {
  CalendarDays,
  ChevronLeft,
  Github,
  MessageCircle,
  SquareArrowOutUpRight,
} from "lucide-react";
import { Text } from "../components/text";

export function RepositoryPage() {
  const { id } = useParams();
  console.log(id);
  return (
    <Container className="relative">
      <Card className="-translate-y-1/2 space-y-4">
        <div className="flex justify-between">
          <Link
            to="/"
            className="uppercase text-blue text-xs font-semibold flex gap-1 items-center"
          >
            <ChevronLeft className="w-5 h-5 text-blue font-semibold" />
            <span>voltar</span>
          </Link>

          <Link
            to="/"
            className="uppercase text-blue text-xs font-semibold flex gap-1 items-center"
            target="_blank"
          >
            <span>Git hub</span>
            <SquareArrowOutUpRight className="w-4 h-4 text-blue font-semibold" />
          </Link>
        </div>
        <Title>Repository</Title>
        <div className="w-full flex gap-6">
          <div className="flex items-center gap-2">
            <Github className="w-5 h-5 text-base-label" />
            <Text className="text-base-subtitle">Henry</Text>
          </div>
          <div className="flex items-center gap-2">
            <CalendarDays className="w-5 h-5 text-base-label" />
            <Text className="text-base-subtitle">Henry</Text>
          </div>
          <div className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-base-label" />
            <Text className="text-base-subtitle">Henry</Text>
          </div>
        </div>
      </Card>
      <main className="absolute top-24 px-8 py-10 space-y-6">
        <Text>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn.
        </Text>
        <Text>
          JavaScript is a loosely typed and dynamic language. Variables in
          JavaScript are not directly associated with any particular value type,
          and any variable can be assigned (and re-assigned) values of all
          types:
        </Text>
      </main>
    </Container>
  );
}
