import { Elysia } from "elysia";
import { clerkPlugin } from "elysia-clerk";

const auth = new Elysia()
    .use(clerkPlugin())
    .get("/user", async ({ clerk, store, set }) => {
        if (!store.auth?.userId) {
            set.status = 403;
            return "Unauthorized";
        }

        const user = await clerk.users.getUser(store.auth.userId);

        return { user };
    });

export default auth;
