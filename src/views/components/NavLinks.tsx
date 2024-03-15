import { db } from "../../db";

const posts = db.posts;

function NavLinks() {
  return (
    <ul class="menu menu-horizontal items-center gap-2">
      <li>
        <details>
          <summary>
            <a href="/posts">Posts</a>
          </summary>
          <ul class="p-2 bg-base-100 rounded-t-none">
            {posts.map((post) => (
              <li>
                <a href={`/posts/${post.id}`}>
                  {post.title.substring(0, 10)}...
                </a>
              </li>
            ))}
          </ul>
        </details>
      </li>
      <li id="auth-links" class="flex flex-row gap-3">
        <button class="btn-primary btn" onclick="Clerk.openSignUp()">
          Sign Up
        </button>
        <button class="btn" onclick="Clerk.openSignIn()">
          Sign In
        </button>
      </li>
      <div id="user-button"></div>
    </ul>
  );
}

export default NavLinks;
