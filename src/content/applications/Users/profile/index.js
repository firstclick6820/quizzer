import { Helmet } from 'react-helmet-async';
import Footer from 'src/components/Footer';

import { Grid, Container } from '@mui/material';



// Import Custom
import ProfileCover from './ProfileCover';
// import RecentActivity from './RecentActivity';
// import Feed from './Feed';
// import PopularTags from './PopularTags';
// import MyCards from './MyCards';
// import Addresses from './Addresses';

function ManagementUserProfile() {
  const user = {
    savedCards: 7,
    name: 'MOH KHALID MOMAND',
    coverImg: '/static/images/placeholders/covers/8.jpg',
    avatar: '/static/images/avatars/PROFILE1.png',
    description:
      "Results-oriented and Energetic professional with 7 years of experience and proven knowledge of Cost Management, General Accountant, Business Administration, Production, and Business Operations.  Apart from my Professional career, I am a self-taught Python Developer, Web Developer, Digital Marketing specialist, and GUI designer.",
    jobtitle: 'Full Stack Developer',
    location: 'Dubai, UAE',
    followers: '15k+'
  };

  return (
    <>
      <Helmet>
        <title>User Details - Management</title>
      </Helmet>
      <Container sx={{ mt: 3 }} maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} md={12}>
            <ProfileCover user={user} />
          </Grid>
          <Grid item xs={12} md={4}>
            {/* <RecentActivity /> */}
          </Grid>
          <Grid item xs={12} md={8}>
            {/* <Feed /> */}
          </Grid>
          <Grid item xs={12} md={4}>
            {/* <PopularTags /> */}
          </Grid>
          <Grid item xs={12} md={7}>
            {/* <MyCards /> */}
          </Grid>
          <Grid item xs={12} md={5}>
            {/* <Addresses /> */}
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default ManagementUserProfile;
