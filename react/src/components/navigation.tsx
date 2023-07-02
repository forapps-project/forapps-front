import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import homeicon from "../icons/Home.png";
import editicon from "../icons/Edit.png";
import chaticon from "../icons/Chat.png";
import flagicon from "../icons/Flag.png";
import settingicon from "../icons/Setting_line.png";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
`;

interface IconBoxProps {
  icon: any;
  name: string;
}

const Text = styled.span`
  font-size: 12px;
  color: var(--gray-2, #777);
`;

const IconBox = ({ icon, name }: IconBoxProps) => {
  return (
    <StyledDiv>
      <img src={icon} alt="home" />
      <Text>{name}</Text>
    </StyledDiv>
  );
};

const NavBox = styled.nav`
  display: flex;
  position: fixed;
  justify-content: space-evenly;
  align-items: center;
  bottom: 0;
  width: 100%;
  height: 76px;
  border-radius: 20px 20px 0px 0px;
  border-top: 0.4px solid var(--gray-3, #c4c4c4);
  border-right: 0.4px solid var(--gray-3, #c4c4c4);
  border-left: 0.4px solid var(--gray-3, #c4c4c4);
  background: var(--black-2, #2d2d2d);
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.5);
  z-index: 100;
`;

const linkStyle = {
  textDecoration: "none",
  color: "white",
};

const Navigation = () => {
  return (
    <NavBox>
      <Link to="/main" style={linkStyle}>
        <IconBox icon={homeicon} name="홈" />
      </Link>
      <Link to="" style={linkStyle}>
        <IconBox icon={editicon} name="일지" />
      </Link>
      <Link to="" style={linkStyle}>
        <IconBox icon={chaticon} name="커뮤니티" />
      </Link>
      <Link to="" style={linkStyle}>
        <IconBox icon={flagicon} name="리워드" />
      </Link>
      <Link to="" style={linkStyle}>
        <IconBox icon={settingicon} name="설정" />
      </Link>
    </NavBox>
  );
};

export default Navigation;
