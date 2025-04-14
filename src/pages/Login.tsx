import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #111827;
  color: #fff;
`;

const LoginCard = styled.div`
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

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 4px;
`;

const Subtitle = styled.p`
  color: #9ca3af;
  text-align: center;
  margin-bottom: 24px;
  font-size: 14px;
`;

const GoogleLoginButton = styled.button`
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

const GoogleIcon = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
`;

const Footer = styled.div`
  margin-top: 20px;
  font-size: 12px;
  color: #6b7280;
`;

function Login() {
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    // 오어쓰 구현하기
    setTimeout(() => {
      navigate('/dm');
    }, 1500);
  };

  return (
    <LoginContainer>
      <LoginCard>
        <Title>BSSM CHAT</Title>
        <Subtitle>로그인 후 채팅 시작하기</Subtitle>
        <GoogleLoginButton onClick={handleGoogleLogin}>
          <GoogleIcon>
            <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
              <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
                    s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20
                    s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
              <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039
                    l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
              <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
                    c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
              <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
                    c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
            </svg>
          </GoogleIcon>
          Google 계정으로 로그인
        </GoogleLoginButton>
      </LoginCard>
      <Footer>
        © 2025 주현과동욱ㅋ
      </Footer>
    </LoginContainer>
  );
}

export default Login;