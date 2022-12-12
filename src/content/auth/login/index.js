import { Box, Container } from '@mui/material';
import { Helmet } from 'react-helmet-async';

import { styled } from '@mui/material/styles';

// import Logo from 'src/components/LogoSign';
import LoginForm from './LoginForm';



const LoginWrapper = styled(Box)(
  () => `
    overflow: auto;
    flex: 1;
    overflow-x: hidden;
    align-items: center;
    height: 100vh;
`
);

function Login() {
  return (
    <LoginWrapper>
      <Helmet>
        <title>Login - Page!</title>
      </Helmet>
     
      <Container maxWidth="lg">
          <LoginForm />
          
      </Container>
    </LoginWrapper>
  );
}

export default Login;
