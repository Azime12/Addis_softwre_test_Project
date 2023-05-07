import React from "react";
import logo from "../assets/images.jpeg";
import { ContentContainer } from "./Styles/Container.style";
import { StyledHeader, Nav, Logo, Text } from "./Styles/Header.style";
import { Button } from "./Styles/Button.styled";

const Header = () => {
  return (
    <StyledHeader>
      {/* <ContentContainer> */}
      {/* <div class="header">
        <a href="#default" class="logo">
          CompanyLogo
        </a>
        <div class="header-right">
          <a class="active" href="#home">
            Home
          </a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
      </div> */}

      <Nav>
        <Text>
          {/* <h4>addis</h4> */}
          <Logo src={logo} alt="Addis Software" />
        </Text>
        <Button>Try Pro</Button>
      </Nav>
      {/* </ContentContainer> */}
    </StyledHeader>
  );
};

export default Header;
