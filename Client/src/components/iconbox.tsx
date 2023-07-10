import { ReactNode } from "react";
import { Link, NavLink } from "react-router-dom";

import { ReactComponent as Home } from "../icons/Home.svg";
import { ReactComponent as Edit } from "../icons/Edit.svg";
import { ReactComponent as Chat } from "../icons/Chat.svg";
import { ReactComponent as Flag } from "../icons/Flag.svg";
import { ReactComponent as Setting } from "../icons/Setting.svg";

import styled from "styled-components";

interface IconBoxProps {
    icon: ReactNode;
    text: string;
    route: string;
    key: number;
  };

export const IconItems = [
  { icon: <Home />, text: "홈", route: "/main", id: 1 },
  { icon: <Edit />, text: "일지", route: "/diary", id: 2 },
  { icon: <Chat />, text: "커뮤니티", route: "/community", id: 3 },

  { icon: <Setting />, text: "설정", route: "setting", id: 5 },
];

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
`;

const Text = styled.span`
  font-size: 12px;
  color: var(--gray-2, #777);
`;

const linkStyle = {
  textDecoration: "none",
  color: "white",
};

const activeStyle = {
  textDecoration: "none",
  color: "#FFD954"
}

const IconBox = ({ key, icon, text, route }: IconBoxProps) => {
    return (
      <StyledDiv>
        <NavLink to={route} style={({isActive}) => (isActive ? activeStyle :linkStyle)} key={key}>
          {icon}
        </NavLink>
        <Text>{text}</Text>
      </StyledDiv>
    );
};

export default IconBox;