import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="bg-gray-800 text-white p-4 px-3 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">Profile Map App</h1>
      <div className="space-x-4">
        <Link
          to="/"
          className={`hover:text-blue-400 ${
            location.pathname === "/" ? "text-blue-800 font-semibold" : "text-blue-600"
          } hover:underline`}
        >
          Home
        </Link>
        <Link
          to="/admin"
          className={`hover:text-blue-400 ${
            location.pathname === "/admin" ? "text-blue-800 font-semibold" : "text-blue-600"
          } hover:underline`}
        >
          Admin Panel
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
