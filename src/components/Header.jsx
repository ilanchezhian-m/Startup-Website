import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";

export function Header() {
  const [activeLink, setActiveLink] = useState(null);

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div>
      <header>
        <div className="bg-black text-white px-8 py-7">
          <div className="flex items-center justify-between pr-5">
            <h5 className="text-xs sm:text-xl mb-4 md:mb-0 md:mr-4">
              <NavLink to="/" onClick={() => handleNavLinkClick(null)}>
                TAS <br />INNOVATION
              </NavLink>
            </h5>
            <div>
              <h1>
                <nav className=" space-x-4 text-base head-style hidden md:block ">
                  <NavLink
                    to="/"
                    className={`nav-menu ${
                      activeLink === "home" && "active-link"
                    }`}
                    onClick={() => handleNavLinkClick("home")}
                  >
                    HOME
                  </NavLink>
                  <NavLink
                    to="carrer"
                    className={`nav-menu ${
                      activeLink === "carrer" && "active-link"
                    }`}
                    onClick={() => handleNavLinkClick("carrer")}
                  >
                    CARRER
                  </NavLink>
                  <NavLink
                    to="courses"
                    className={`nav-menu ${
                      activeLink === "courses" && "active-link"
                    }`}
                    onClick={() => handleNavLinkClick("courses")}
                  >
                    COURSES
                  </NavLink>
                  <NavLink
                    to="service"
                    className={`nav-menu ${
                      activeLink === "service" && "active-link"
                    }`}
                    onClick={() => handleNavLinkClick("service")}
                  >
                    SERVICES
                  </NavLink>
                  <NavLink
                    to="about"
                    className={`nav-menu ${
                      activeLink === "about" && "active-link"
                    }`}
                    onClick={() => handleNavLinkClick("about")}
                  >
                    ABOUT
                  </NavLink>
                </nav>
              </h1>
            </div>
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
