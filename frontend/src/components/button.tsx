import styled from "@emotion/styled";
import { Colors } from "../styles/colors";

interface Props {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  text: string;
  disabled?: boolean;
  fill?: boolean;
}

export const Button = ({
  onClick,
  text,
  disabled = false,
  fill = true,
}: Props) => {
  return (
    <Container onClick={onClick} disabled={disabled} fill={fill}>
      {text}
    </Container>
  );
};

const Container = styled.button<{ fill: boolean }>`
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  color: ${Colors.white};
  padding: 16px 32px;
  background-color: ${Colors.primary};
  border-radius: 10px;
  width: ${({ fill }) => fill ? '100%' : 'auto'};

  &:disabled {
    background-color: ${Colors.placeholder};
  }
`;
