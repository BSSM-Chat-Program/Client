import * as S from './style';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { SiKakaotalk } from 'react-icons/si';

const providers = [
  {
    name: 'Google',
    provider: 'google',
    icon: <FcGoogle size={20} />,
    bgColor: '#fff',
    textColor: '#333',
  },
  {
    name: 'GitHub',
    provider: 'github',
    icon: <FaGithub size={20} />,
    bgColor: '#24292f',
    textColor: '#fff',
  },
  {
    name: 'Kakao',
    provider: 'kakao',
    icon: <SiKakaotalk size={20} />,
    bgColor: '#FEE500',
    textColor: '#000',
  },
];

function Login() {
  const handleOAuthLogin = (provider: string) => {
    window.location.href = `${import.meta.env.VITE_API_BASE_URL}/oauth2/link/${provider}`;
  };

  return (
    <S.LoginContainer>
      <S.LoginCard>
        <S.Title>BSSM CHAT</S.Title>
        <S.Subtitle>로그인 후 채팅을 시작하세요</S.Subtitle>

        {providers.map(({ name, provider, icon, bgColor, textColor }) => (
          <S.OAuthButton
            key={provider}
            bgColor={bgColor}
            textColor={textColor}
            onClick={() => handleOAuthLogin(provider)}
          >
            <S.OAuthIcon>{icon}</S.OAuthIcon>
            {name} 계정으로 로그인
          </S.OAuthButton>
        ))}
      </S.LoginCard>

      <S.Footer>© 2025 주현과동욱ㅋ</S.Footer>
    </S.LoginContainer>
  );
}

export default Login;