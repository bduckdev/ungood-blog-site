import Layout from "./layout";
import { Elysia } from "elysia";
import { html } from "@elysiajs/html";

const layoutMachine = new Elysia();

function LayoutMachineComponent(): JSX.Element {
  return <Layout>{}</Layout>;
}

export default layoutMachine;
