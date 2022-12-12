import { Box, Container } from '@mui/material';
import { Helmet } from 'react-helmet-async';

import { styled } from '@mui/material/styles';
// import Logo from 'src/components/LogoSign';
import SignupForm from './SignupForm';


const LoginWrapper = styled(Box)(
  () => `
    overflow: auto;
    flex: 1;
    overflow-x: hidden;
    align-items: center;
    height: 100vh;
`
);

function Signup() {
  return (
    <LoginWrapper>
      <Helmet>
        <title>Registeration - Page!</title>
      </Helmet>
      <Container maxWidth="lg" >
          <SignupForm />
      </Container>
    </LoginWrapper>
  );
}

export default Signup;
