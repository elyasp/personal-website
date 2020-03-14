import React from "react";
import { Nav, List, Links, Hole } from "./styles";
import { NavLink } from "../navLink";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 5) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <Nav isScrolled={isScrolled}>
      <Hole>
        <img src={require("./logo.png")} width="70" alt="hole" />
      </Hole>
      <Links>
        <List>
          <NavLink section="home">Home</NavLink>
          <NavLink section="portfolio">Portfolio</NavLink>
          <NavLink section="about">About me</NavLink>
          <NavLink section="contact">Contact</NavLink>
        </List>
      </Links>
    </Nav>
  );
};