import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";

export function Header() {
  const [activeLink, setActiveLink] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
    closeMobileMenu();
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div>
      <header>
        <div className="bg-black text-white px-8 py-7">
          <div className="flex items-center justify-between pr-5">
            <h5 className="text-xs sm:text-xl mb-4 md:mb-0 md:mr-4">
              <NavLink to="/" onClick={closeMobileMenu}>
                TAS <br />INNOVATION
              </NavLink>
            </h5>
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-white focus:outline-none"
              >
                {/* Hamburger menu icon */}
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 30 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h17M4 12h17m-17 6h17"
                  ></path>
                </svg>
              </button>
            </div>
            
            <div className="hidden md:block">
              <h1>
                <nav className=" space-x-4 text-base head-style">
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
        {/* Mobile menu  design*/}
        {isMobileMenuOpen && (
          <div className="md:hidden flex  flex-col bg-black text-white para-font p-4 space-y-4">
            <NavLink
              to="/"
              onClick={closeMobileMenu}
            >
              <p className="para-smallcase">Home</p>
              
            </NavLink>
            <NavLink
              to="carrer"
              onClick={closeMobileMenu}
            >
            
             <p className="para-smallcase">Carrer</p>
            </NavLink>

            <NavLink
              to="courses"
              onClick={closeMobileMenu}
            >
              <p className="para-smallcase">Courses</p>
            </NavLink>

            <NavLink
              to="service"
              onClick={closeMobileMenu}
            >
              <p className="para-smallcase">Services</p>
            </NavLink>

            <NavLink
              to="about"
              onClick={closeMobileMenu}
            >
             <p className="para-smallcase">About</p>
            </NavLink>
            
          </div>
        )}
      </header>

     
        <Outlet />
    
    </div>
  );
}
