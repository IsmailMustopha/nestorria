import React, { useEffect } from "react";
import { useAppContext } from "../../context/AppContext";
import { assets } from "../../assets/data";
import { Link, NavLink, Outlet } from "react-router-dom";
import { UserButton } from "@clerk/clerk-react";

const Sidebar = () => {
  const { navigate, isOwner, user } = useAppContext();

  const navItems = [
    { path: "/owner", label: "Dashboard", icon: assets.dashboard },
    {
      path: "/owner/add-property",
      label: "Add Property",
      icon: assets.housePlus,
    },
    { path: "/owner/list-property", label: "List Property", icon: assets.list },
  ];

  useEffect(() => {
    if (!isOwner) navigate("/");
  }, [isOwner]);

  return (
    <div className="bg-gradient-to-r from-[#fffbee] to-white min-h-screen">
      <div className="mx-auto max-w-[1440px] flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="flex flex-col justify-between bg-white m-3 md:min-w-[20%] md:min-h-[97vh] rounded-2xl shadow-md transition-all">
          {/* Top Section */}
          <div className="flex flex-col gap-y-6">
            {/* Logo and Mobile User */}
            <div className="w-full flex justify-between md:flex-col border-b border-slate-100 pb-3">
              <div className="flex items-center p-4 lg:pl-8">
                <Link to={"/owner"}>
                  <img
                    src={assets.logoImg}
                    alt="Logo"
                    className="h-11 hover:scale-105 transition-transform"
                  />
                </Link>
              </div>

              {/* Mobile User */}
              <div className="md:hidden flex items-center gap-3 bg-[#fffbee] rounded-lg px-3 py-2 mx-3 shadow-sm">
                <UserButton
                  appearance={{
                    elements: {
                      userButtonAvatarBox: { width: "42px", height: "42px" },
                    },
                  }}
                />
                <span className="text-sm font-semibold text-gray-800 capitalize">
                  {user?.firstName} {user?.lastName}
                </span>
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex md:flex-col md:gap-y-2 mt-4">
              {navItems.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.path}
                  end={link.path === "/owner"}
                  className={({ isActive }) =>
                    `flex items-center gap-x-3 px-6 py-3 mx-2 my-1 rounded-xl transition-all duration-200 ${
                      isActive
                        ? "bg-[#d1e8ff] text-secondary font-semibold shadow-sm"
                        : "text-gray-700 hover:bg-[#fff4d2] hover:text-gray-900"
                    }`
                  }
                >
                  <img
                    src={link.icon}
                    alt={link.label}
                    className="hidden md:block w-5 opacity-80"
                  />
                  <span className="text-sm md:text-[15px] tracking-wide">
                    {link.label}
                  </span>
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Bottom User Section */}
          <div className="hidden md:flex items-center gap-3 bg-[#fffbee] border-t border-slate-200 rounded-b-2xl p-4 shadow-inner">
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: { width: "42px", height: "42px" },
                },
              }}
            />
            <div className="text-sm font-semibold text-gray-800 capitalize">
              {user?.firstName} {user?.lastName}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Sidebar;
