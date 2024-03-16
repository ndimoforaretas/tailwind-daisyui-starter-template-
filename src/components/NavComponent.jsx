import ThemeToggle from "./ThemeToggler";

const NavComponent = () => {
  return (
    <div className="navbar bg-base-100 py-3 lg:px-20">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>

      <div className="navbar-end">
        <ThemeToggle />
      </div>
    </div>
  );
};
export default NavComponent;
