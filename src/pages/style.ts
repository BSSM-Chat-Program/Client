import styled from '@emotion/styled';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #111827;
  color: #fff;
`;

export const LoginCard = styled.div`
  background-color: #1f2937;
  border-radius: 12px;
  padding: 32px 24px;
  width: 100%;
  max-width: 340px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 4px;
`;

export const Subtitle = styled.p`
  color: #9ca3af;
  text-align: center;
  margin-bottom: 24px;
  font-size: 14px;
`;

export const GoogleLoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: white;
  color: #333;
  border: none;
  border-radius: 8px;
  padding: 12px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #f9fafb;
    transform: translateY(-1px);
  }
`;

export const GoogleIcon = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
`;

export const Footer = styled.div`
  margin-top: 20px;
  font-size: 12px;
  color: #6b7280;
`;