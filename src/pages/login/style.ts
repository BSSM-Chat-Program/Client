// src/pages/login/style.ts
import styled from '@emotion/styled';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: #fff;
`;

export const LoginCard = styled.div`
  background-color: rgba(13, 17, 23, 0.95);
  border-radius: 16px;
  padding: 40px 32px;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const Subtitle = styled.p`
  font-size: 15px;
  color: #ccc;
  margin-bottom: 32px;
`;

export const OAuthButton = styled.button<{ bgColor: string; textColor: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ textColor }) => textColor};
  border: none;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 12px;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  }
`;

export const OAuthIcon = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Footer = styled.div`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 24px;
`;
