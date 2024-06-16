import React from 'react';
import { Box, Container, Grid, Link, Typography } from '@mui/material';
import { styled } from '@mui/system';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const FooterContainer = styled('footer')(({ theme }) => ({
  backgroundColor: '#0039a6', // Light blue color
  color: 'white', // Adjust text color for better contrast
  padding: theme.spacing(4, 0),
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: 'inherit',
  textDecoration: 'none',
  '&:hover': {
    color: theme.palette.grey[600], // Adjust hover color for better contrast
  },
}));

export default function Footer() {
  return (
    <FooterContainer>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <FooterLink href='/'>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Edufy
            </Typography>
            </FooterLink>
            
            <Typography variant="body2" fontWeight="bold">
              Discover a world of knowledge with our comprehensive education platform.
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Quick Links
            </Typography>
            <FooterLink fontWeight="bold" href="#">Courses</FooterLink><br />
            <FooterLink fontWeight="bold" href="#">About</FooterLink><br />
            <FooterLink fontWeight="bold" href="#">Contact</FooterLink><br />
            <FooterLink fontWeight="bold" href="#">Blog</FooterLink>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Social
            </Typography>
            <Box display="flex" gap={2}>
              <FooterLink href="#">
                <FacebookIcon />
              </FooterLink>
              <FooterLink href="#">
                <InstagramIcon />
              </FooterLink>
              <FooterLink href="#">
                <TwitterIcon />
              </FooterLink>
              <FooterLink href="#">
                <LinkedInIcon />
              </FooterLink>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Legal
            </Typography>
            <Typography fontWeight="bold" variant="body2">&copy; 2024 Edufy. All rights reserved.</Typography>
            <FooterLink fontWeight="bold" href="#">Terms of Service</FooterLink><br />
            <FooterLink fontWeight="bold" href="#">Privacy Policy</FooterLink>
          </Grid>
        </Grid>
      </Container>
    </FooterContainer>
  );
}
