import { ReactElement, ReactNode } from "react";
import styled, { css } from "styled-components";

import { theme } from "../styles/colortheme";

interface ButtonStyle {
  width?: string;
  height?: string;

  hasBorder?: boolean;

  borderRadius?: string;

  fontSize?: string;
}

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonStyle {
  children: ReactNode;
  className?: string;
}

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 40px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid;
  width: 350px;
  height: 48px;
  border-color: var(--sleeper-blue-1);
  background: var(--sleeper-blue-1);
  color: var(--white);
`;

function Button({ className, children, ...rest }: ButtonProps): ReactElement {
  return (
    <StyledButton className={className} {...rest}>
      {children}
    </StyledButton>
  );
}

export default Button;
