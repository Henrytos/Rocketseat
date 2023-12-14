import { Suspense } from "react";

import { GitHubProfile } from "@/components/git-hub-profile";
import { LongWaitComponent } from "@/components/long-wait-component";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <main>
      <h1>home</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim blanditiis
        voluptatibus, quisquam totam esse necessitatibus voluptas optio
        voluptatem amet, consequuntur explicabo rem, laudantium placeat quaerat?
        Esse laboriosam, nihil ipsum odit et, ea at voluptatum aperiam
        exercitationem, cum deserunt ipsa nam. Culpa eveniet ipsum omnis
        pariatur quod optio laboriosam deleniti necessitatibus qui molestias,
        libero debitis laudantium porro odit? Mollitia dolorem possimus
        dignissimos magni labore quod vitae delectus nihil amet deleniti nulla
        qui voluptatum praesentium dolores, sint voluptas aliquam obcaecati rem
        laborum quisquam accusantium similique? Aut cum distinctio vitae ratione
        natus temporibus pariatur! Reiciendis tempore impedit ipsam voluptate
        iste dignissimos deleniti officia?
      </p>
      <Suspense fallback={<p>estou carregando long wait component</p>}>
        <LongWaitComponent />
      </Suspense>
      <Suspense fallback={<p>estou carrendo git hub profile</p>}>
        <GitHubProfile />
      </Suspense>
    </main>
  );
}
