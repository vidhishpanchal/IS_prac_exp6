import React from 'react'
import { Typography, Container, Grid, Box, Divider, Button } from '@material-ui/core'
import { Instagram, Facebook, } from '@material-ui/icons'
import { LinkedIn, Twitter, YouTube } from '@material-ui/icons'
import { Link } from 'react-router-dom'
// import { Link } from '@mui/material';
const Footer = () => {
  const styleOfLink = {
    fontWeight: 'bold',
    color: "white",
    textDecoration: 'none'
  }
  return (
    <>
      <footer>
        <Box
          sx={{
            marginLeft: 0,
            marginRight: 0,
            marginTop: 0,
            marginBottom: 0,
            backgroundColor: "black"
          }}

          color="white" p={5} m={10}
          textAlign='center' >
          <Container maxWidth="lg">
            {/* <Grid container spacing={5}>
              <Grid item xs={12} sm={3}>
                <Box borderBottom={1} mb={1} sx={{ fontWeight: 'bold' }} >Product</Box>
                <Box pb={0.8}><Link to='/' style={styleOfLink} color="inherit" >Internship In India</Link></Box>
                <Box pb={0.8}><Link to='/' style={styleOfLink} color="inherit">Internship in Delhi</Link></Box>
                <Box pb={0.8}><Link to='/' style={styleOfLink} color="inherit">Internship in Banglore</Link></Box>
                <Box pb={0.8}><Link to='/' style={styleOfLink} color="inherit">Internship in Hyderabad</Link></Box>
                <Box pb={0.8}><Link to='/' style={styleOfLink} color="inherit">Internship in Mumbai</Link></Box>
                <Box pb={0.8}><Link to='/' style={styleOfLink} color="inherit">Internship in Chennai</Link></Box>
                <Box pb={0.8}><Link to='/' style={styleOfLink} color="inherit">Internship in Gurugaon</Link></Box>
                <Box pb={0.8}><Link to='/' style={styleOfLink} color="inherit">Internship in Kolkata</Link></Box>
                <Box pb={0.8}><Link to='/' style={styleOfLink} color="inherit">View Internship</Link></Box>

              </Grid>
              <Grid item xs={12} sm={3}>
                <Box borderBottom={1} mb={1} style={{ fontWeight: 'bold' }}>Internship by Stream</Box>
                <Box pb={0.8}><Link to='/' style={styleOfLink} color="inherit">Computer Science Internship</Link></Box>
                <Box pb={0.8}><Link to='/' style={styleOfLink} color="inherit">Electronics Internship</Link></Box>
                <Box pb={0.8}><Link to='/' style={styleOfLink} color="inherit">Mechanical Internship</Link></Box>
                <Box pb={0.8}><Link to='/' style={styleOfLink} color="inherit">Civil Internship</Link></Box>
                <Box pb={0.8}><Link to='/' style={styleOfLink} color="inherit">Marketing Internship</Link></Box>
                <Box pb={0.8}><Link to='/' style={styleOfLink} color="inherit">Chemical Internship</Link></Box>
                <Box pb={0.8}><Link to='/' style={styleOfLink} color="inherit">Finance Internship</Link></Box>
                <Box pb={0.8}><Link to='/' style={styleOfLink} color="inherit">Summer Research Fellowship</Link></Box>
                <Box pb={0.8}><Link to='/' style={styleOfLink} color="inherit">Campus Ambassador Program</Link></Box>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Box borderBottom={1} mb={1} style={{ fontWeight: 'bold' }}>Online Trainings</Box>
                <Box pb={0.8}><Link to='/' style={styleOfLink} color="inherit">Programming with Python</Link></Box>
                <Box pb={0.8}><Link to='/' style={styleOfLink} color="inherit">Digital Marketing</Link></Box>
                <Box pb={0.8}><Link to='/' style={styleOfLink} color="inherit">Web Development</Link></Box>
                <Box pb={0.8}><Link to='/' style={styleOfLink} color="inherit">Machine Learning</Link></Box>
                <Box pb={0.8}><Link to='/' style={styleOfLink} color="inherit">Advanced Excel</Link></Box>
                <Box pb={0.8}><Link to='/' style={styleOfLink} color="inherit">AutoCAD</Link></Box>
                <Box pb={0.8}><Link to='/' style={styleOfLink} color="inherit">Creative Writing</Link></Box>
                <Box pb={0.8}><Link to='/' style={styleOfLink} color="inherit">Data Science</Link></Box>
              </Grid>
              <Grid item xs={12} sm={3} bp={5}>
                <Box borderBottom={1} mb={1} style={{ fontWeight: 'bold' }}>About XcitEducation</Box>
                <Box pb={0.8}><Link to='/' style={styleOfLink} color="inherit">About Us</Link></Box>
                <Box pb={0.8}><Link to='/' style={styleOfLink} color="inherit">We're hiring</Link></Box>
                <Box pb={0.8}><Link to='/' style={styleOfLink} color="inherit">Hire interns for your company</Link></Box>
                <Box pb={0.8}><Link to='/' style={styleOfLink} color="inherit">Team Diary</Link></Box>
                <Box pb={0.8}><Link to='/' style={styleOfLink} color="inherit">Blog</Link></Box>
                <Box pb={0.8}><Link to='/' style={styleOfLink} color="inherit">Our Services</Link></Box>
                <Box pb={0.8}><Link to='/' style={styleOfLink} color="inherit">Terms & Conditions</Link></Box>
                <Box pb={0.8}><Link to='/' style={styleOfLink} color="inherit">Privacy</Link></Box>
                <Box pb={0.8}><Link to='/' style={styleOfLink} color="inherit">Contact US</Link></Box>
              </Grid>

            </Grid> */}

          </Container>

          <Box pt={3} >
            <Divider style={{ background: 'white' }} />
            <container maxWidth="lg">

              <Grid container spacing={5}>

                <Grid item xs={12} sm={6}>

                  <Typography variant='h6' sx={{ fontWeight: 'bold' }}>Follow Us</Typography>
                  <a style={{ color: "white", textDecoration: "none" }} href="https://www.instagram.com/xcitedu/"><Button style={{ color: "white" }}><Instagram /></Button></a>
                  {/* <Link href="https://www.instagram.com/xcitedu/?utm_medium=copy_link"><Button style={{ color: "aqua" }}><Instagram /></Button></Link> */}

                  <a style={{ color: "white", textDecoration: "none" }} href="https://www.facebook.com/XcitEducation-104917554849541/"><Button style={{ color: "white" }} ><Facebook /></Button></a>
                  <a style={{ color: "white", textDecoration: "none" }} href="https://www.linkedin.com/company/xcitedu-software-solutions-private-limited/"><Button style={{ color: "white" }} color='inherit' ><LinkedIn /></Button></a>
                  <a style={{ color: "white", textDecoration: "none" }} href="https://twitter.com/EducationXcit?t=5JqUq909PyjD31mHu1LT4A&s=09"><Button style={{ color: "white" }} color='inherit' ><Twitter /></Button></a>
                  <a style={{ color: "white", textDecoration: "none" }} href="https://www.youtube.com/channel/UCVJpyRAbVPIoB2LwOgNzv6w"><Button style={{ color: "white" }} color='inherit' ><YouTube /></Button></a>

                </Grid>

                <Grid item xs={12} sm={6} bgcolor='secondary' textAlign='center'  >
                  <Typography variant='h6' align='center' >©Copyright 2022 XcitEducation</Typography>
                </Grid>


              </Grid>

            </container>
          </Box>
        </Box>
      </footer>
    </>
  )
}

export default Footer


// import React from "react";
// import Typography from "@material-ui/core/Typography";
// import { makeStyles } from "@material-ui/core";
// import InstagramIcon from '@material-ui/icons/Instagram';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import FacebookIcon from '@material-ui/icons/Facebook';
// import TwitterIcon from '@material-ui/icons/Twitter';
// import YouTubeIcon from '@material-ui/icons/YouTube';

// const styles = makeStyles((theme) => ({
//   footer: {
//     background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 100%)",
//     padding: theme.spacing(6),
//   },
//   icon: {
//     margin: '15px'
//   }
// }))

// const Footer = () => {
//   const classes = styles()
//   return (
//     <footer className={classes.footer}>
//       <Typography
//         variant="subtitle1"
//         align="center"
//         color="textSecondary"
//         component="p"
//       >
//         © 2021 XcitEducation Inc. All rights reserved.
//       </Typography>
//       <Typography variant="body2" color="textSecondary" align="center">
//         <InstagramIcon fontSize="large" className={classes.icon} />
//         <LinkedInIcon fontSize="large" className={classes.icon} />
//         <FacebookIcon fontSize="large" className={classes.icon} />
//         <TwitterIcon fontSize="large" className={classes.icon} />
//         <YouTubeIcon fontSize="large" className={classes.icon} />
//       </Typography>
//     </footer>
//   );
// };

// export default Footer;
