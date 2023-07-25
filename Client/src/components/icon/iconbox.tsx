import { NavLink, useLocation } from "react-router-dom";

import styled from "styled-components";
import Icon, { IconType } from "./iconFactory";

interface IconBoxProps {
  iconName: IconType;
  text: string;
  route: string;
  key: number;
}

export const IconItems:IconBoxProps[] = [
  { iconName: "home", text: "홈", route: "/main", key: 1 },
  { iconName: "edit", text: "일지", route: "/diary", key: 2 },
  { iconName: "chat", text: "커뮤니티", route: "/community", key: 3 },
  { iconName: "setting", text: "설정", route: "/setting", key: 5 },
];

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
`;

type textProp = {
  active: boolean;
}

const Text = styled.span<textProp>`
  font-size: 12px;
  color: ${(props) => props.active? "#FFD954" : "#777777"};
`;


const IconBox = ({ iconName, text, route }: IconBoxProps) => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <StyledDiv>
      <NavLink to={route}>
        <Icon icon={iconName} isActive={route === pathname} />
      </NavLink>
      <Text active={route === pathname}>{text}</Text>
    </StyledDiv>
  );
};

export default IconBox;
