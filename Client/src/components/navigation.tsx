import IconBox, {IconItems} from "./iconbox";
import styled from "styled-components";

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
  z-index: 1;
`;

const Navigation = () => {
  return (
    <NavBox>
      {IconItems.map((item) => (
        <IconBox
          key={item.key}
          iconName={item.iconName}
          text={item.text}
          route={item.route}
        />
      ))}
    </NavBox>
  );
};

export default Navigation;