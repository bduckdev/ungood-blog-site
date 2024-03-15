import Card from "./components/Card";
import Layout from "./layout";
import { readFile } from "../libs/markdown";
import { trunc, removeSpecialChars } from "../libs/utils";

import { db } from "../db";

function Posts() {
  return (
    <Layout>
      <ul class="grid grid-cols-2 p-8 gap-5 items-center justify-center min-h-[calc(100vh-7rem)]">
        {db.posts.map(async (post) => {
          const content = await readFile(post.content);

          return (
            <li>
              <Card
                title={post.title}
                description={trunc(removeSpecialChars(content), 15)}
                id={post.id}
                image={post.image}
              />
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}

export default Posts;
