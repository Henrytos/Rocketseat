import { Building, Github, Users } from "lucide-react";
import { Card } from "../components/card";
import { Text } from "../components/text";
import { Title } from "../components/title";

export function HomePage() {
  return (
    <>
      <main className="max-w-4xl mx-auto ">
        <Card className="flex gap-8 -translate-y-1/2">
          <img className=" rounded-lg w-36 h-36 object-cover block " />
          <div className="space-y-6  flex-1">
            <div className="space-y-2">
              <Title>Henry</Title>
              <Text>
                Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
                viverra massa quam dignissim aenean malesuada suscipit. Nunc,
                volutpat pulvinar vel mass.
              </Text>
            </div>
            <div>
              <span>
                <Github />
              </span>
              <span>
                <Building />
              </span>
              <Users />
              <span></span>
            </div>
          </div>
        </Card>
      </main>
    </>
  );
}
