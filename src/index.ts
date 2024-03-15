import { Elysia } from 'elysia';
import home from './routes/home';
import setup from './setup';
import posts from './routes/posts';

const s = new Elysia();

s.use(setup);
s.use(home);
s.use(posts);
s.listen(3000);
