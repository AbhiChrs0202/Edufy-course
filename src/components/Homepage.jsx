import {
  Box,
  Button,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";
import hompagepic from "../assets/Webinar-amico.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link as ScrollLink, Element } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ScrollToTop from "./ScrollToTop";

const CardImage = styled("img")({
  width: "100%",
  height: "auto",
  objectFit: "cover",
  borderRadius: "4px 4px 0 0",
});

export default function Homepage({ courses }) {
  const navigate = useNavigate();

  const handleEnrollNow = (course) => {
    navigate(`/course/${course.id}`, { state: { course } });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <ScrollToTop />
      <section
        style={{
          backgroundColor: "#f3f4f6",
          padding: "48px 0",
          paddingLeft: "8vw",
          paddingRight: "8vw",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <div>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.8rem" },
                    color: "#3B3C36",
                  }}
                  gutterBottom
                >
                  Learn from the best
                </Typography>
                <Typography
                  variant="h6"
                  color="textSecondary"
                  sx={{ fontWeight: "bold" }}
                  paragraph
                >
                  Unlock your potential with our top-rated online courses.
                </Typography>
                <ScrollLink to="course-section" smooth={true} duration={500}>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      fontSize: "1rem",
                      width: "18vw",
                      height: "100%",
                      cursor: "pointer",
                      transition: "all 0.4s ease-in-out",
                      "&:hover": {
                        backgroundColor: "primary.dark",
                        color: "white",
                      },
                      transition: "transform 0.3s",
                      "&:hover": { transform: "scale(1.05)" },
                    }}
                  >
                    Explore Courses{" "}
                    <ArrowForwardIcon sx={{ fontSize: 20, ml: 2 }} />
                  </Button>
                </ScrollLink>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <img
                src={hompagepic}
                alt="Hero Image"
                style={{ width: "100%", height: "auto", borderRadius: "8px" }}
              />
            </Grid>
          </Grid>
        </Container>
      </section>
      <Element name="course-section">
        <section
          style={{ padding: "48px 0", paddingLeft: "5vw", paddingRight: "5vw" }}
        >
          <Container maxWidth="lg">
            <div style={{ marginBottom: "32px" }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "2rem", sm: "2.5rem" },
                  color: "#3B3C36",
                }}
                gutterBottom
              >
                Master all the skills you need in one place.
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold" }}
                color="textSecondary"
                paragraph
              >
                Explore our top-rated online courses.
              </Typography>
            </div>
            <Grid container spacing={3}>
              {courses.map((course) => (
                <Grid item xs={12} sm={6} md={4} key={course.id}>
                  <Card
                    sx={{
                      height: "100%",
                      borderRadius: "0.5rem",
                      display: "flex",
                      flexDirection: "column",
                      transition: "transform 0.3s",
                      "&:hover": { transform: "scale(1.05)" },
                      boxShadow: 5,
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="220"
                      image={course.image}
                      alt={`${course.title} Image`}
                      style={{ objectFit: "cover" }}
                    />
                    <CardContent
                      sx={{
                        flex: "1 0 auto",
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                      }}
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: "bold",
                          color: "#3B3C36",
                          paddingBottom: "0.5rem",
                        }}
                        gutterBottom
                      >
                        {course.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: "bold", paddingBottom: "0.5rem" }}
                        color="textSecondary"
                        component="p"
                      >
                        {course.description}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: "bold",
                          color: "#3B3C36",
                          paddingBottom: "0.5rem",
                        }}
                        gutterBottom
                      >
                        {course.lecturer}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          fontWeight: "bold",
                          color: "#3B3C36",
                        }}
                      >
                        <span>{course.price}</span>
                        <Button
                          variant="contained"
                          onClick={() => handleEnrollNow(course)}
                        >
                          Enroll Now
                        </Button>
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </section>
      </Element>
    </div>
  );
}
