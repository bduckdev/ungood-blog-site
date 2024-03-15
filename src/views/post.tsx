import { markdownMachine } from "../libs/markdown";
import Layout from "./layout";
import "./post.css";
import { db } from "../db";

function Post(id: string) {
  let post = db.posts.find((post) => post.id === id);
  console.log(post);
  const body = markdownMachine(post.content);
  return (
    <Layout>
      <section class="w-full flex justify-center flex-col gap-5 p-10">
        <p class="text-5xl pb-10">{post.title}</p>
        <img
          src={post.image}
          alt={post.title}
          class="object-cover h-[450px] w-[800px]"
        />
        {body}
      </section>
    </Layout>
  );
}

export default Post;
