import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Colors } from "../styles/colors";

interface Props {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  text: string;
  gray?: boolean;
  disabled?: boolean;
  fill?: boolean;
}

export const Button = ({
  onClick,
  text,
  disabled = false,
  fill = true,
  gray = false,
}: Props) => {
  return (
    <Container onClick={onClick} disabled={disabled} gray={gray} fill={fill}>
      {text}
    </Container>
  );
};

const Container = styled.button<{ fill: boolean; gray: boolean }>`
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  color: ${Colors.white};
  padding: 16px 32px;
  background-color: ${Colors.primary};
  border-radius: 10px;
  width: ${({ fill }) => (fill ? "100%" : "auto")};

  ${({ gray }) =>
    gray &&
    css`
      background-color: ${Colors.placeholder};
    `}
    
  &:disabled {
    background-color: ${Colors.placeholder};
  } ;
`;
