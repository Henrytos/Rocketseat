import { Building, Github, Users } from "lucide-react";
import { Card } from "./card";
import { Title } from "./title";
import { Text } from "./text";

export function CardProfile() {
  return (
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
        <div className="w-full flex gap-6">
          <div className="flex items-center gap-2">
            <Github className="w-5 h-5 text-base-label" />
            <Text className="text-base-subtitle">Henry</Text>
          </div>
          <div className="flex items-center gap-2">
            <Building className="w-5 h-5 text-base-label" />
            <Text className="text-base-subtitle">Henry</Text>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-base-label" />
            <Text className="text-base-subtitle">Henry</Text>
          </div>
        </div>
      </div>
    </Card>
  );
}
