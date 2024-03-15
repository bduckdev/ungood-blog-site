import NavLinks from "./NavLinks";

export default function Navbar() {
  return (
    <div class="navbar bg-base-100">
      <div class="flex-1">
        <a href="/" class="btn btn-ghost text-xl">
          UNGOOD BLOG SITE
        </a>
      </div>
      <div class="flex-none">
        <NavLinks />
      </div>
    </div>
  );
}
