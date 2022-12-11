import { Helmet } from 'react-helmet-async';

import {
  Container,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Divider, 
  Button

} from '@mui/material';

import {Link } from 'react-router-dom'
import LoginIcon from '@mui/icons-material/Login';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';




// import Switch from '@mui/material/Switch';

// const label = { inputProps: { 'aria-label': 'Switch demo' } };



function Login() {
  // const [currency, setCurrency] = useState('EUR');

  // const handleChange = (event) => {
  //   setCurrency(event.target.value);
  // };

  // const [value, setValue] = useState(30);

  // const handleChange2 = (event, newValue) => {
  //   setValue(newValue);
  // };

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>

    

        <Container maxWidth="lg">
            <Grid
              mt="1em"
              container
              direction="row"
              justifyContent="center"
              alignItems="stretch"
              spacing={3}
            >
              <Grid item xs={10} md={4} xl={3}>
                <Card>
                  <CardHeader title="Login" />

                  <Divider />

                  <CardContent>
                    <Box component="form" noValidate autoComplete="off">
                      <Box display="grid" justifyContent="space-between" gap={1.4} gridTemplateColumns="repeat(1, 1fr)">

                        <TextField
                          fullWidth
                          required
                          id="outlined-required"
                          label="username"
                          defaultValue=""
                        />
                    
                        <TextField
                          fullWidth
                          required
                          id="outlined-password-input"
                          label="Password"
                          type="password"
                          autoComplete="current-password"
                        />

                    
                      <Button type="submit" variant="outlined" endIcon={<LoginIcon />}>
                            Login
                      </Button>

                      {/* <Box display="flex" gap={2} mt="1em" justifyContent="space-between">
                        <Switch {...label} defaultChecked />
                        <strong>Remember me</strong>
                      </Box> */}


                      

                      <Box display="flex" gap={2} mt="1em" justifyContent="center">
                            <strong>Don't Have An Account? </strong><Link to="/auth/signup" >Create One</Link>
                      </Box>

                      </Box>
                    
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            
            
            </Grid>
        </Container>

      
    </>
  );
}

export default Login;
