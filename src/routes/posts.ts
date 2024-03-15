import { Elysia } from "elysia";
import Posts from "../views/posts";
import Post from "../views/post";

const posts = new Elysia({ prefix: "/posts" })
  .get("/", () => Posts())
  .get("/:id", ({ params: { id } }) => Post(id));

export default posts;
