import React, { useEffect } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Card,
  CardContent,
  Button,
  Typography,
  Grid,
  Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import BookIcon from '@mui/icons-material/Book';
import { useLocation, useNavigate } from 'react-router-dom';
import VideoComponent from './VideoPlayer';
import CourseInfo from './CourseInfo';
import ScrollToTop from './ScrollToTop';
import { coursesData } from '../CourseData';

export default function CourseDetail({courses}) {
  const navigate = useNavigate();
  const location = useLocation();
  const { course } = location.state;

  if (!course) return <div>Course Not Found</div>;

  const onSubmit = () => {
    navigate('/chapter', { state: { course } });
  };

  return (
    <>
    <ScrollToTop />
    <Box sx={{ maxWidth: '1200px', mx: 'auto', py: 6, px: 4, mt: 6 }}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={7.5}>
          <Box>
            <Typography variant="h3" fontWeight="bold">
              {course.title}
            </Typography>
            <Typography color="text.secondary" mt={2}>
              {course.description}
            </Typography>
          </Box>
          <Box mt={4}>
            <Box display="flex" alignItems="center" gap={2}>
              <Box display="flex" alignItems="center">
                <StarIcon color="primary" />
                <StarIcon color="primary" />
                <StarIcon color="primary" />
                <StarBorderIcon color="action" />
                <StarBorderIcon color="action" />
              </Box>
              <Typography color="text.secondary">4.5 (1,234 reviews)</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={2} mt={2}>
              <AccessTimeIcon color="action" />
              <Typography color="text.secondary">24 hours of content</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={2} mt={2}>
              <PersonIcon color="action" />
              <Typography color="text.secondary">Created By {course.lecturer}</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={2} mt={2}>
              <SchoolIcon color="action" />
              <Typography color="text.secondary">Certificate of Completion</Typography>
            </Box>
            <Button onClick={onSubmit} variant='outlined' size='large' sx={{ width : "25vw",mt : 4, cursor :"pointer" ,transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.06)' ,backgroundColor: 'primary.dark',color: 'white' }}} >
              Course Chapters 
            </Button>
          </Box>
          <Box mt={4}>
            <CourseInfo />
            {/* Your Accordion components here */}
          </Box>
        </Grid>
        <Grid item xs={12} md={4.5}>
          <Card sx={{ boxShadow: 5, position: 'relative',transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
            <CardContent>
              <VideoComponent coursesData={coursesData} />
              <Box display="flex" flexDirection="column" alignItems="left" mt={2}>
                <Typography variant="h5" fontWeight="bold" fontFamily="EB Garamond" paddingBottom="0.7rem">
                  Enroll in our Top-Rated course now!
                </Typography>
                <Typography variant="h6" fontWeight="bold" color="text.secondary" fontFamily="EB Garamond" paddingBottom="0.6rem">
                  Get this course and start your Journey Now.
                </Typography>
                <Typography variant="h5" fontWeight="bold" paddingBottom="2rem">
                  {course.price}
                </Typography>
                <Button size="large" variant="contained" sx={{transition: 'transform 0.3s', '&:hover': { transform: 'scale(1)' }}}>
                  Add to Cart
                </Button>
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" mt={2}>
                  <Typography variant="h8" fontWeight="600">
                    30-Day Money-Back Guarantee
                  </Typography>
                  <Typography variant="h8" fontWeight="600" mt={1}>
                    Full-Time Access
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
          <Button onClick={onSubmit} variant="outlined" fullWidth startIcon={<BookIcon />} sx={{ width : "27vw",mt : 4, cursor :"pointer" ,transition: 'transform 0.5s', '&:hover': { transform: 'scale(1.06)' ,backgroundColor: 'primary.dark',color: 'white' }}}>
            View Chapters
          </Button>
        </Grid>
      </Grid>
    </Box>
    </>
  );
}
