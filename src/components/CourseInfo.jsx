import { Card, Typography, Grid, Box } from "@mui/material";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import DescriptionIcon from "@mui/icons-material/Description";
import BookIcon from "@mui/icons-material/Book";
import GetAppIcon from "@mui/icons-material/GetApp";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import StarIcon from "@mui/icons-material/Star";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import BadgeIcon from "@mui/icons-material/Badge";

export default function CourseInfo() {
  return (
    <Card
      sx={{
        backgroundColor: "#E2DFD2",
        borderRadius: "0",
        border: 1,
        boxShadow: 8,
        overflow: "hidden",
      }}
    >
      <Box sx={{ p: { xs: 5, md: 5, lg: 6 } }}>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
              <Box
                sx={{
                  borderRadius: "lg",
                  backgroundColor: "gray.100",
                  px: 3,
                  py: 1,
                  textTransform: "uppercase",
                  fontWeight: "medium",
                  dark: { backgroundColor: "gray.800" },
                }}
              >
                Featured Course
              </Box>
              <StarIcon
                fontWeight="large"
                sx={{ ml: "auto", color: "primary" }}
              />
            </Box>
            <Typography variant="h4" fontWeight="bold" mb={3}>
              This Course Includes :
            </Typography>
            <Grid container spacing={6}>
              <Grid item xs={12} md={6}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  {renderFeature(
                    "On-demand Videos",
                    "120+ hours",
                    <VideoLibraryIcon sx={{ color: "primary" }} />
                  )}
                  {renderFeature(
                    "Coding Exercises",
                    "200+ challenges",
                    <DescriptionIcon sx={{ color: "primary" }} />
                  )}
                  {renderFeature(
                    "Articles",
                    "50+ in-depth guides",
                    <BookIcon sx={{ color: "primary" }} />
                  )}
                  {renderFeature(
                    "Downloadable Resources",
                    "100+ assets",
                    <GetAppIcon sx={{ color: "primary" }} />
                  )}
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  {renderFeature(
                    "Access on Mobile & TV",
                    "Learn anytime, anywhere",
                    <PhoneIphoneIcon sx={{ color: "primary" }} />
                  )}
                  {renderFeature(
                    "Lifetime Access",
                    "Learn at your own pace",
                    <AllInclusiveIcon sx={{ color: "primary" }} />
                  )}
                  {renderFeature(
                    "Certificate of Completion",
                    "Showcase your skills",
                    <BadgeIcon sx={{ color: "primary" }} />
                  )}
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
}

function renderFeature(title, description, icon) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
      {icon}
      <Box>
        <Typography variant="subtitle1" fontWeight="medium">
          {title}
        </Typography>
        <Typography color="text.secondary">{description}</Typography>
      </Box>
    </Box>
  );
}
