import { ReactNode } from 'react';
import styled from '@emotion/styled';
import { Colors } from '../styles/colors';

interface LayoutType {
  title?: string;
  hasBackButton?: boolean;
  children: ReactNode;
}

const BackButton = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
    <path
      d="M8 16L9.88001 14.12L3.77334 8L9.88001 1.88L8 -6.41192e-07L3.33629e-06 8L8 16Z"
      fill="#1E2222"
    />
  </svg>
);

export const Layout = ({ title, hasBackButton, children }: LayoutType) => {
  return (
    <Container>
      {(title || hasBackButton) && (
        <Header>
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

const Header = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  color: ${Colors.titleActive};
`;
