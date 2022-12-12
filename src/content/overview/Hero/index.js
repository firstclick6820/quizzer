import { Box, Button, Container, Grid, Typography } from '@mui/material';

import { Link as RouterLink } from 'react-router-dom';

import { styled } from '@mui/material/styles';

const TypographyH1 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(50)};
`
);

const TypographyH2 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(17)};
`
);

const LabelWrapper = styled(Box)(
  ({ theme }) => `
    background-color: ${theme.colors.success.main};
    color: ${theme.palette.success.contrastText};
    font-weight: bold;
    border-radius: 30px;
    text-transform: uppercase;
    display: inline-block;
    font-size: ${theme.typography.pxToRem(11)};
    padding: ${theme.spacing(0.5)} ${theme.spacing(1.5)};
    margin-bottom: ${theme.spacing(2)};
`
);

const MuiAvatar = styled(Box)(
  ({ theme }) => `
    width: ${theme.spacing(8)};
    height: ${theme.spacing(8)};
    border-radius: ${theme.general.borderRadius};

    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto ${theme.spacing(2)};

    img {
      width: 100%;
      height: 100%;
      display: block;
    }
`
);

const JsAvatar = styled(Box)(
  ({ theme }) => `
    width: ${theme.spacing(8)};
    height: ${theme.spacing(8)};
    border-radius: ${theme.general.borderRadius};
  
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto ${theme.spacing(2)};

    img {
      width: 130%;
      aspect-ratio:1/1;
      display: block;
    }
`
);

function Hero() {
  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
      <Grid
        spacing={{ xs: 6, md: 10 }}
        justifyContent="center"
        alignItems="center"
        container
      >
        <Grid item md={10} lg={8} mx="auto">
          <LabelWrapper color="success">Sell Your Skill</LabelWrapper>

          <TypographyH1 sx={{ mb: 2 }} variant="h1">
            Quizzer
          </TypographyH1>

          <TypographyH2
            sx={{ lineHeight: 1.5, pb: 4 }}
            variant="h4"
            color="text.secondary"
            fontWeight="normal">
            Fast growing platform to engage with People, grow your skills, become more productivy and sell your skills.
          </TypographyH2>

          <Box display='flex' justifyContent="center" gap={2}>
            <Button
              component={RouterLink}
              to="/auth/login"
              size="sm"
              variant="outlined">
              Sing in
            </Button>
            
            <Button
              component={RouterLink}
              to="/auth/signup"
              size="sm"
              variant="outlined">
              Signup
            </Button>
          </Box>


          <Grid container spacing={3} mt={5}>
            <Grid item md={6}>
              <MuiAvatar>
                <img
                  src="/static/images/home/bulb.png"
                  alt="Material-UI"
                />
              </MuiAvatar>
              <Typography variant="h4">
                <Box sx={{ pb: 2 }}>
                  <b>Quizzes</b>
                </Box>
                <Typography component="span" variant="subtitle2">
                  An Online Platform that change your life, save your time, and make your future.
                </Typography>
              </Typography>
              <RouterLink to="/quizzes">See All</RouterLink>
            </Grid>
            <Grid item md={6}>
              <JsAvatar>
                <img
                  src="/static/images/home/home3.png"
                  alt="Javascript"
                />
              </JsAvatar>
              <Typography variant="h4">
                <Box sx={{ pb: 2 }}>
                  <b>Practices</b>
                </Box>
                <Typography component="span" variant="subtitle2">
                  Powerfull Digital Marketing Support to enhance auto sales schema.
                </Typography>
              </Typography>
              <RouterLink to="/practices">See All</RouterLink>
            </Grid>
          </Grid>

        </Grid>
      </Grid>
    </Container>
  );
}

export default Hero;
