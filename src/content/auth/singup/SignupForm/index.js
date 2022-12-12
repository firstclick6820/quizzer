import { Helmet } from 'react-helmet-async';

import {Link} from 'react-router-dom'

import StartIcon from '@mui/icons-material/Start';

import {
  Container,
  Grid,
  Card,
Typography,
  CardContent,
  Button,
  Divider
} from '@mui/material';


import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


// import Custom Components
import SignupButtons from '../SignupButtons';


function SignupForm() {


  return (
    <>
      <Helmet>
        <title>User - Registeration</title>
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
          <Grid item xs={10} md={4} xl={3} textAlign="center">

            <Typography variant='h3' mb="0.5em">Signup to Quizzer</Typography>
            <SignupButtons />

            <Divider sx={{ my: 2.5}}>or</Divider>

            <Card>
              

          
              <CardContent>
                <Box component="form" noValidate autoComplete="off" >
                  <Box display="grid" justifyContent="space-between" gap={1.4} gridTemplateColumns="repeat(1, 1fr)">
                    <TextField
                      required
                      id="outlined-required"
                      label="Username"
                      type="text"
                    />

                    <TextField
                      required
                      id="outlined-required"
                      label="Firstname"
                      type="text"
                      
                    />

                    <TextField
                      required
                      id="outlined-required"
                      label="Lastname"
                      type="text"
                      
                    />


                  <TextField
                      required
                      id="outlined-required"
                      label="Email"
                      type="email"
                    />
                   
                   
                    <TextField
                      id="outlined-password-input"
                      label="Password"
                      type="password"
                      autoComplete="current-password"
                    />
                     <TextField
                      id="outlined-password-input"
                      label="Repeat-Password"
                      type="password"
                      autoComplete="current-password"
                    />
                    
                    <Button variant='outlined' type="submit" endIcon={<StartIcon />}>
                        Register 
                    </Button>

                    <Box display="flex" gap={1} justifyContent="center">
                            <strong>Already have an account? </strong><Link to="/auth/login" >Login</Link>
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

export default SignupForm;
