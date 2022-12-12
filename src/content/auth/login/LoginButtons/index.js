import { Helmet } from 'react-helmet-async';

import {
  ButtonGroup,
  Button

} from '@mui/material';



// immport Icons
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import Switch from '@mui/material/Switch';


function LoginButtons() {


  return (
    <>
    
    <Helmet>Login With Social Links</Helmet>
     
     <ButtonGroup fullWidth variant="outlined" aria-label="outlined button group">
        <Button startIcon={<GoogleIcon />}>Google</Button>
        <Button startIcon={<LinkedInIcon />}>LinkedIn</Button>
        <Button endIcon={<GitHubIcon />}>GitHub</Button>
    </ButtonGroup>
    </>
  );
}

export default LoginButtons;
