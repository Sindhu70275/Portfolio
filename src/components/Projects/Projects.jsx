import { useState } from "react";
import { styled } from '@mui/system';
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

import { projects } from "../../constants/constants";
import "./Projects.css";
import ProjectModal from "./ProjectModal";

const PopCard = styled(CardMedia)(({ theme }) => ({
  height: 'auto',
  maxWidth: '100%',
  position: 'relative',
  overflow: 'hidden',
  '&:hover .speedDialActions': {
      opacity: 1,
      visibility: 'visible',
  },
  transform: 'scale(0.9)',
  '&:hover': {
      transform: 'scale(1)',
  },
}));

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  return (
    <Grid
      container
      sx={{ textAlign: "center", justifyContent: "center", marginTop: "5rem" }}
    >
      <Grid item xs={12} sx={{ marginBottom: "1rem" }}>
        <Typography sx={{ fontSize: "2.5rem", fontWeight: "600" }}>
          Projects
        </Typography>
        <Typography sx={{ fontSize: "1.2rem" }}>
          A Collection of My Technical Endeavors and Achievements
        </Typography>
      </Grid>
      {projects.map((project) => (
        <Grid item xs={12} md={6} lg={4} key={project.id}>
          <PopCard
            sx={{
              border: '0.1px solid #baa4ee',
              boxShadow: 'rgba(23, 92, 230, 0.15) 0px 4px 24px',
              borderRadius: '0.625rem',
              padding: '26px 20px',
              cursor: 'pointer',
              height: 400,
              margin: "1rem",
            }}
            onClick={() => handleOpen(project)}
          >
            <CardMedia
              component="img"
              sx={{
                height: "auto",
                width: "100%",
                borderRadius: "10px",
              }}
              image={project.image}
              title={project.title}
            />
            <CardContent sx={{ textAlign: "start" }}>
              <Stack sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: "0.5rem",
                marginTop: "1rem"
              }}>
                {project.tags.map((tag, index) => (
                  <span className="project-tag" key={index}>
                    {tag}
                  </span>
                ))}
              </Stack>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  margin: "1rem 0rem 0.3rem 0rem",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                {project.title}
              </Typography>
              <Typography sx={{
                fontSize: "12px",
                fontWeight: "400",
                marginBottom: "0.5rem"
              }}>{project.date}</Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  whiteSpace: "normal",
                  WebkitLineClamp: 3,
                }}
              >
                {project.description}
              </Typography>
            </CardContent>
          </PopCard>
        </Grid>
      ))
      }
      <ProjectModal
        open={open}
        handleClose={handleClose}
        project={selectedProject}
      />
      <style>{`
                @keyframes pop {
                    0% {
                        transform: scale(1);
                    }
                    50% {
                        transform: scale(1.1);
                    }
                    100% {
                        transform: scale(1);
                    }
                }
            `}</style>
    </Grid >
  );
};

export default Projects;
