import styled from "@emotion/styled";
import { Colors } from "../styles";

interface Props {
  placeholder?: string;
  onChange?: () => void;
  onBlur?: () => void;
  value: string;
  label: string;
}

export const Input = ({
  placeholder,
  onChange,
  onBlur,
  value,
  label,
}: Props) => {
  return (
    <Container>
      <Label>{label}</Label>
      <StyledInput
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
      />
    </Container>
  );
};

const Container = styled.label`
  text-align: left;
`;

const Label = styled.span`
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: #000000;
  margin-bottom: 12px;
  display: block;
`;

const StyledInput = styled.input`
  border-radius: 4px;
  border: 1px solid ${Colors.line};
  padding: 12px 16px;

  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #000000;

  &::placeholder {
    color: #1c1b1f;
  }
`;
