import Link from "next/link";
import { useState } from "react";

const navItems = [
  // { id: 1, name: "Home", path: "/" },
  { id: 1, name: "Find Job", path: "/findJob" },
  { id: 2, name: "Upload CV", path: "/uploadCV" },
  { id: 3, name: "Post a Job", path: "/postaJob" },
  { id: 4, name: "Login/Signup", path: "/loginSignup" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-50 p-6">
      <div className=" sm:flex items-center flex-shrink-0 text-black">
        {/* <span className="font-semibold text-xl tracking-tight">My Website</span> */}
        <img src="/logo.png" className="lg:ml-8 ml-2" alt="Logo" />
      </div>
      <div className="flex md:hidden items-center">
        <button
          className="flex items-center px-3 py-2 border rounded text-slate-900 border-slate-600 hover:text-gray-700 "
          onClick={toggleMenu}
        >
          <svg
            className="fill-slate-900 text-slate-900"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            {isMenuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 2h18v2H1V2zm0 8h18v2H1v-2zm18 6H1v-2h18v2z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
              />
            )}
          </svg>
        </button>
      </div>
      <div
        className={`w-full ${
          isMenuOpen ? "block" : "hidden"
        } md:block md:flex md:items-center md:w-auto ml-auto`}
      >
        <div className="text-md font-medium md:flex-grow">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.path}
              className="block mt-4 md:inline-block lg:mt-0 text-gray-900 hover:text-gray-800 mr-8"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
