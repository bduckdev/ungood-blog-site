import { Elysia } from "elysia";
import Home from "../views/home";
const home = new Elysia({ prefix: "/" }).get("/", () => Home());

export default home;
