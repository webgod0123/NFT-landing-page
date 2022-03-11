import { useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Logo from "../../assets/img/logo.png";
import useNav from "../../hooks/useNav";
import { Link } from "react-router-dom";
import NavbarToggler from "./NavbatToggler";
import Image from "../common/Image";
import Button from "../common/Button";

const Navbar = () => {
  const navs = [
    { menu: "Home", scrollLink: "home", link: "" },
    { menu: "Features", scrollLink: "blog", link: "" },
    { menu: "Roadmap", scrollLink: "roadmap", link: "" },
    { menu: "Team", scrollLink: "about", link: "" },
  ];

  const [navbarOpen] = useNav(false);
  const location = useLocation();

  return (
    <>
      <nav
        id="header"
        className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top p-0"
      >
        <div className="container py-3 py-lg-2 d-flex justify-content-between">
          <Link to="/" className="navbar-brand pointer">
            <Image src={Logo} />
          </Link>
          <button
            className="navbar-toggler border-0 outline-none p-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
          >
            <NavbarToggler navbarOpen={navbarOpen} />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0 md-align-items-center">
              {navs.map((nav, index) => (
                <li key={index} className="nav-item">
                  {location.pathname === "/" ? (
                    <ScrollLink
                      activeClass="active"
                      className="nav-link white px-0 py-2 pointer"
                      to={nav.scrollLink}
                      spy={true}
                    >
                      {nav.menu}
                    </ScrollLink>
                  ) : (
                    <Link
                      className={`nav-link white px-0 py-2 pointer ${
                        location.pathname === nav.link && "active"
                      }`}
                      to={nav.link}
                    >
                      {nav.menu}
                    </Link>
                  )}
                </li>
              ))}
              <li className="ps-md-4">
                <Button text="Join Our Discord" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
