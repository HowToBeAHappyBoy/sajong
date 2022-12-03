import { ReactNode } from 'react';
import styled from '@emotion/styled';
import { Colors } from '../styles/colors';
import { useNavigate } from 'react-router-dom';

interface LayoutType {
  title?: string;
  hasBackButton?: boolean;
  hasBackground?: boolean;
  children: ReactNode;
}

const BackButton = () => {
  const navigate = useNavigate();

  const onBack = () => navigate(-1);
  return (
    <button onClick={onBack}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="16"
        viewBox="0 0 10 16"
        fill="none"
      >
        <path
          d="M8 16L9.88001 14.12L3.77334 8L9.88001 1.88L8 -6.41192e-07L3.33629e-06 8L8 16Z"
          fill="#1E2222"
        />
      </svg>
    </button>
  );
};

export const Layout = ({ title, hasBackButton, children, hasBackground = false }: LayoutType) => {
  return (
    <Container>
      {(title || hasBackButton) && (
        <Header hasBackground={hasBackground}>
          {hasBackButton && <BackButton />}
          {title && <Title>{title}</Title>}
        </Header>
      )}
      {children}
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Header = styled.div<{ hasBackground: boolean }>`
  position: fixed;
  width: 100%;
  top: 0px;
  padding: 16px;
  display: flex;
  align-items: center;
  background: ${({ hasBackground }) => (hasBackground ? Colors.white : 'none')};
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  color: ${Colors.titleActive};
`;
