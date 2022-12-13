
import { Helmet } from 'react-helmet-async';


import {
  Container,
  Grid,
  CardContent,
  Divider,
  Typography,
  Badge,
  CardMedia,
  Card,
  Box,

 

} from '@mui/material';


import PageHeader from './PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';


import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

import SlowMotionVideoOutlinedIcon from '@mui/icons-material/SlowMotionVideoOutlined';
import Footer from 'src/components/Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';




function DashboardTasks() {
      const [quizz, setQuizzes] = useState([])
      const images = [
        "/static/images/placeholders/covers/1.jpg",
        "/static/images/placeholders/covers/6.jpg",
        "/static/images/placeholders/covers/7.jpg",
        "/static/images/placeholders/covers/8.jpg"
      ]
     


 


      const getDate = async () => {
        axios.get('https://quizzer-backend.onrender.com/api/quizzes/')
             .then((response) => {
                  
              setQuizzes(response.data)
             })
             .catch((error)=> {
                  console.log(error.message)
             })
      } 
      

      useEffect(() => (
          getDate()
      ), [])


      if (!quizz) return null;

  return (
    <>
      <Helmet>
        <title>Quizzes</title>
      </Helmet>

      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>


      <Container maxWidth="lg">

        {/* First - Wrapper Grid */}
        <Grid
             
              justifyContent="center"
              alignItems="stretch"
              >



          {/* Top Quizzes */}
          <Grid item component={'Box'}>

              {/* Header */}
              <Typography variant="h5" sx={{mt:'3em'}}>Featured</Typography>
              <Divider sx={{mb: 2}}/>
                
              <Grid container spacing={{ xs:2, md: 3 }} columns={{ xs: 1, sm: 4, md: 12 }}>
                
                    {Array.from(quizz.slice(0, 4)).map((q, index) => (
                      <Grid item xs={1} sm={2} md={3} key={index}>
                        {/* Item */}
                        <Card>

                            <CardMedia sx={{ height: 120 }} image={images[index]}/>

                            <CardContent>

                              <Box sx={{ display: 'flex', justifyContent: 'space-between'}} >
                                <Typography gutterBottom variant="h4" component="div">
                                    {q.name}
                                </Typography>

                                <Badge 
                                      color="primary" 
                                      badgeContent={q.max_questions} 
                                      max={999} 
                                      anchorOrigin={{ vertical: 'top', horizontal: 'left',}}>
                                <SlowMotionVideoOutlinedIcon />
                                </Badge>
                            
                              </Box>

                              

                            
                              
                            </CardContent>


                            <CardActions>
                              <Button size="small">Share</Button>
                              <Button size="small">Learn More</Button>
                            </CardActions>

                          </Card>
                          {/* Item End */}

                      </Grid>
                    ))}
              </Grid>
          </Grid>
          {/* End of Top Quizzes */}



        </Grid>

        {/* End of First Wrapper Grid */}
      </Container>

      <Footer />
    </>
  );
}

export default DashboardTasks;
