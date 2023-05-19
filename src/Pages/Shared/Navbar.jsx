import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/kindersKidLogoTest.svg";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  if (user !== null) {
    const displayName = user.displayName;
    const photoURL = user.photoURL;
    console.log(displayName, photoURL);
  }

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/aboutus">aboutUs</Link>
              </li>
              <li>
                <Link to="/alltoys">allToys</Link>
              </li>
              <li>
                <Link to="/mytoys">myToys</Link>
              </li>
              <li>
                <Link to="/addatoy">addAToy</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              {user?.email ? (
                <>
                  <li>
                    <Link to="/mytoys">myToys</Link>
                  </li>
                  <li>
                    <button onClick={handleLogOut}>LogOut</button>
                  </li>
                </>
              ) : (
                <li>
                  <Link to="/login">LogIn</Link>
                </li>
              )}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/aboutus">aboutUs</Link>
            </li>
            <li>
              <Link to="/alltoys">allToys</Link>
            </li>
            <li>
              <Link to="/addatoy">addAToy</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            {user?.email ? (
              <>
                <li>
                  <Link to="/mytoys">myToys</Link>
                </li>
                <li>
                  <button onClick={handleLogOut}>LogOut</button>
                </li>
              </>
            ) : (
              <li>
                <Link to="/login">LogIn</Link>
              </li>
            )}
          </ul>
        </div>
        <div className="navbar-end">
  {user && (
    <div className="group inline-block relative">
      <img
        src={user.photoURL}
        alt={user.displayName}
        className="w-10 h-10 rounded-full"
      />
      <div className="opacity-0 bg-black text-white text-xs rounded p-2 absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-2 transition-opacity duration-300 group-hover:opacity-100">
  {user.displayName}
</div>
    </div>
  )}
</div>
      </div>
    </>
  );
};

export default Navbar;
