import { Link } from "react-router-dom";
import { Card } from "../card";
import { SubTitle } from "../sub-title";
import { Text } from "../text";

export function RepositoryItem() {
  return (
    <Link to="/1">
      <Card className="p-8 space-y-5">
        <div className="flex justify-between items-start ">
          <SubTitle className="flex-1 text-base-title text-xl">
            JavaScript data types and data structures
          </SubTitle>
          <Text className="text-base-span ">Há 1 dia</Text>
        </div>
        <Text>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible,
        </Text>
      </Card>
    </Link>
  );
}
