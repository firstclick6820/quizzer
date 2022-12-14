import { Helmet } from 'react-helmet-async';

import {Link} from 'react-router-dom'

import StartIcon from '@mui/icons-material/Start';

import { useNavigate } from "react-router-dom";


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

// import axios to send data to the server
import axios from 'axios'
import { Formik } from 'formik';
import * as yup from "yup";



// Import API EndPOINTS
import { LOCAL_HOST_API_URL } from 'src/API_ENDPOINTS';





function SignupForm() {

  const navigate = useNavigate();
 








// for working with 2 api endpoints
  // const  handleFormSubmit =(values, {resetForm}) => {
  //   let isFirstEndpointWorking = true
  //   // Use a ternary operator to check if the first endpoint is working
  //   const apiEndpoint = isFirstEndpointWorking ? firstApiEndpoint : secondApiEndpoint;

  //   axios.post(apiEndpoint,values)
  //     .then(response => {
  //       // do something with the response data
  //           resetForm();
  //           navigate('/quizzes');
  //           console.log(response)
  //     })
  //     .catch(error => {
  //       // handle the error
  //       if (error.message === 'Network Error'){
  //           isFirstEndpointWorking = false
  //           axios.post(secondApiEndpoint, values).then((res)=> {
  //             resetForm();
  //             navigate('/quizzes');
  //             console.log(res)
            
  //           })
  //       }
        
  //     });
  // }



// For working with one api endpoint
  const handleFormSubmit = (values, {resetForm}) => {
  

    axios.post(LOCAL_HOST_API_URL, values)
          .then((response) => {

            resetForm();
            navigate('/quizzes');
            console.log(response)
            
          })
          .catch((error) => {
            console.log(error.message)
          })
  }



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
                <Formik
                  onSubmit={handleFormSubmit}
                  initialValues={initialValues}
                  validationSchema={checkoutSchema}
                   
            
                  >
                  {({
                    values,
                    errors,
                    touched,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                  }) => (
                    <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
                      <Box display="grid" justifyContent="space-between" gap={1.4} gridTemplateColumns="repeat(1, 1fr)">
                        <TextField
                          required
                          label="Username"
                          name='username'
                          type="text"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.username}
                          error={!!touched.username && !!errors.username}
                          helperText={touched.username && errors.username}
                        />

                        <TextField
                          required
                          label="Firstname"
                          name="first_name"
                          type="text"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.first_name}
                          error={!!touched.first_name && !!errors.first_name}
                          helperText={touched.first_name && errors.first_name}
                          
                        />

                        <TextField
                          required
                          label="Lastname"
                          name="last_name"
                          type="text"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.last_name}
                          error={!!touched.last_name && !!errors.last_name}
                          helperText={touched.last_name && errors.last_name}
                          
                        />


                      <TextField
                          required
                          label="Email"
                          name='email'
                          type="email"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.email}
                          error={!!touched.email && !!errors.email}
                          helperText={touched.email && errors.email}
                        />
                      
                      
                        <TextField
                          required
                          label="Password"
                          name='password'
                          type="password"
                          autoComplete="current-password"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.password}
                          error={!!touched.password && !!errors.password}
                          helperText={touched.password && errors.password}
                        />
                        <TextField
                        required
                        label="Confirm-Password"
                          name="confirm_password"
                          type="password"
                          autoComplete="confirm_password"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.confirm_password}
                          error={!!touched.confirm_password && !!errors.confirm_password}
                          helperText={touched.confirm_password && errors.confirm_password}
                        />
                        
                        <Button variant='outlined' type="submit" endIcon={<StartIcon />}>
                            Register 
                        </Button>

                        <Box display="flex" gap={1} justifyContent="center">
                                <strong>Already have an account? </strong><Link to="/auth/login" >Login</Link>
                        </Box>

                      </Box>
                
          

                      
                    </Box>
                )}
                </Formik>
              </CardContent>
            </Card>
          </Grid>
       
        </Grid>
      </Container>

    </>
  );
}

export default SignupForm;




// create a custom validation function that makes an API call to check if the username is available
const validateUsername = async (username) => {

        const response = await axios.get(`${LOCAL_HOST_API_URL}/users/check_username/${username}/`);
        const isUsernameAvailable = response.data.available;
        
        if (!isUsernameAvailable) {
          throw new yup.ValidationError('This username is already taken.', username, 'username');
        }
      
        return response
};




// create a custom validation function that makes an API call to check if the username is available
const validateEmail = async (email) => {

  const response = await axios.get(`${LOCAL_HOST_API_URL}/users/check_email/${email}/`);
  const isEmailAvailable = response.data.available;
  
  if (!isEmailAvailable) {
    throw new yup.ValidationError('This email is already taken.', email, 'email');
  }

  return response
};





const checkoutSchema = yup.object().shape({

  username:  yup
                .string()
                .required('Username is required!')
                .min(5, "Username should not be less then 5 characters.")
                .max(20, "Username should not be more then 20 characters.")
                .matches(/^[a-z]/, 'Username must start with a letter')
                .matches(/^[a-zA-Z0-9_]+$/, 'Username must not contain special characters')
                .test('username', 'This username is already taken.', validateUsername),
    

  first_name: yup
                .string()
                .required("Firstname is required!")
                .min(3, "Firstname should not be less then 3 characters.")
                .max(20, "Firstname should not be more then 20 characters."),

  last_name:  yup
               .string()
               .required("Lastname is required!")
               .min(3, "Lastname should not be less then 3 characters.")
               .max(20, "Lastname should not be more then 20 characters."),

  email:     yup
               .string()
               .email('Invalid email')
               .matches(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,'Invalid email')
               .required("Email is required!")
               .test('email', 'This email is already taken.', validateEmail),
  password:  yup
               .string()
               .required("Password is required")
               .min(8, 'Password must be at least 8 characters.')
               .max(32, "Password must not be more then 32 characters.")
               .matches(/[0-9]/, 'Password must contain at least one digit')
               .matches(/[@$!%*?&]/, 'Password must contain at least one special character')
               .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
               .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
               .matches(/[0-9]/, 'Password must contain at least one number')
               .notOneOf([yup.ref('username'), yup.ref('email')], 'Password cannot be the same as username or email')
               .required('Password is required'),


  confirm_password: yup
              .string()
              .required("Confirm password is required")
              .oneOf([yup.ref('password'), null], "Passwords must match!")

});

const initialValues = {
  username: "",
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  confirm_password: "",
};


// const passwordSchema = Yup.string().test(
//   'password-strength',
//   'Your password is not strong enough',
//   (value, formValues) => {
//     // Check if the password contains at least one special character
//     if (!/[!@#$%^&*]/.test(value)) {
//       return false;
//     }

//     // Check if the password contains at least one uppercase letter
//     if (!/[A-Z]/.test(value)) {
//       return false;
//     }

//     // Check if the password contains at least one lowercase letter
//     if (!/[a-z]/.test(value)) {
//       return false;
//     }

//     // Check if the password contains at least one number
//     if (!/[0-9]/.test(value)) {
//       return false;
//     }

//     // Check if the password contains the username or email
//     if (
//       formValues.username &&
//       value.includes(formValues.username)
//     ) {
//       return false;
//     }
//     if (
//       formValues.email &&
//       value.includes(formValues.email)
//     ) {
//       return false;
//     }

//     // Return true if the password is strong enough
//     return true;
//   }
// );
