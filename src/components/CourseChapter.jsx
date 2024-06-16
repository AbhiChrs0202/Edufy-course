import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Container,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import LayersIcon from "@mui/icons-material/Layers";
import RocketIcon from "@mui/icons-material/Rocket";
import { useLocation } from "react-router-dom";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import ScrollToTop from "./ScrollToTop";

function CourseChapters({ courses }) {
  const location = useLocation();
  const { course } = location.state;
  if (!course) return <div>Course Not Found</div>;

  return (
    <>
      <ScrollToTop />
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box mb={8}>
          <Typography
            variant="h3"
            component="h1"
            fontWeight="bold"
            gutterBottom
          >
            {course.title} - Course Chapters
          </Typography>
          <Typography variant="h6" color="textSecondary">
            Explore the chapters and episodes of this course.
          </Typography>
        </Box>
        <Box sx={{ display: "grid", gap: 4 }}>
          <ChapterCard
            icon={<AutoStoriesIcon fontSize="large" />}
            title={course.ch1}
            description={course.ch1d}
            buttonText="Start"
            buttonVariant="contained"
          >
            <Episode
              icon={<VideoCameraFrontIcon fontSize="large" />}
              title={course.ch1ep1}
              description={course.ch1ep1d}
              buttonText="Watch"
            />
            <Episode
              icon={<VideoCameraFrontIcon fontSize="large" />}
              title={course.ch1ep2}
              description={course.ch1ep2d}
              buttonText="Watch"
            />
            <Episode
              icon={<VideoCameraFrontIcon fontSize="large" />}
              title={course.ch1ep3}
              description={course.ch1ep3d}
              buttonText="Watch"
            />
          </ChapterCard>

          <ChapterCard
            icon={<LayersIcon fontSize="large" />}
            title={course.ch2}
            description={course.ch2d}
            buttonText="Unlock"
            buttonVariant="outlined"
          >
            <Episode
              icon={<VideoCameraFrontIcon fontSize="large" />}
              title={course.ch2ep1}
              description={course.ch2ep1d}
              buttonText="Unlock"
            />
            <Episode
              icon={<VideoCameraFrontIcon fontSize="large" />}
              title={course.ch2ep2}
              description={course.ch2ep2d}
              buttonText="Unlock"
            />
            <Episode
              icon={<VideoCameraFrontIcon fontSize="large" />}
              title={course.ch2ep3}
              description={course.ch2ep3d}
              buttonText="Unlock"
            />
          </ChapterCard>

          <ChapterCard
            icon={<RocketIcon fontSize="large" />}
            title={course.ch3}
            description={course.ch3d}
            buttonText="Unlock"
            buttonVariant="outlined"
          >
            <Episode
              icon={<VideoCameraFrontIcon fontSize="large" />}
              title={course.ch3ep1}
              description={course.ch3ep1d}
              buttonText="Unlock"
            />
            <Episode
              icon={<VideoCameraFrontIcon fontSize="large" />}
              title={course.ch3ep2}
              description={course.ch3ep2d}
              buttonText="Unlock"
            />
            <Episode
              icon={<VideoCameraFrontIcon fontSize="large" />}
              title={course.ch3ep3}
              description={course.ch3ep3d}
              buttonText="Unlock"
            />
          </ChapterCard>
        </Box>
      </Container>
    </>
  );
}

function ChapterCard({
  icon,
  title,
  description,
  buttonText,
  buttonVariant,
  children,
}) {
  return (
    <Card>
      <CardHeader
        avatar={icon}
        title={
          <Typography variant="h5" component="h2" fontWeight="bold">
            {title}
          </Typography>
        }
        subheader={
          <Typography variant="body1" color="textSecondary">
            {description}
          </Typography>
        }
        action={
          <Button
            variant={buttonVariant}
            size="large"
            sx={{
              width: { xs: "100%", sm: "10vw" },
              mt: 2,
              cursor: "pointer",
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.06)",
                backgroundColor: "primary.dark",
                color: "white",
              },
            }}
          >
            {buttonText}
          </Button>
        }
      />
      <Divider />
      <CardContent>{children}</CardContent>
    </Card>
  );
}

function Episode({ icon, title, description, buttonText }) {
  return (
    <>
      <Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          py={2}
        >
          <Box display="flex" alignItems="center">
            <IconButton>{icon}</IconButton>
            <Box ml={1}>
              <Typography variant="h6" component="h3">
                {title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {description}
              </Typography>
            </Box>
          </Box>
          <Button
            size="large"
            variant="contained"
            sx={{
              width: { xs: "100%", sm: "10vw" },
              mt: 2,
              cursor: "pointer",
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.06)",
                backgroundColor: "primary.dark",
                color: "white",
              },
            }}
          >
            {buttonText}
          </Button>
        </Box>
        <Divider />
      </Box>
    </>
  );
}

export default CourseChapters;
