import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import CustomButton from "../../common/CustomButton";
import "./Projects.css"

const ProjectModal = ({ open, handleClose, project }) => {
  if (!project) return null;

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "80%", md: "60%" },
          maxWidth: 800,
          maxHeight: "90vh",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          outline: "none",
          position: "relative",
          overflowY: "auto",
        }}
      >
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            color: "grey.500",
          }}
        >
          <CloseIcon />
        </IconButton>
        <CardMedia
          sx={{ height: 200, borderRadius: "10px", marginY: "1rem" }}
          image={project.image}
          title={project.title}
        />
        <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "1rem" }}>
          {project.title}
        </Typography>
        <Stack
          direction="row"
          spacing={1}
          sx={{ marginBottom: "1rem" }}
        >
          {project.tags.map((tag, index) => (
            <span className="project-tag" key={index}>
              {tag}
            </span>
          ))}
        </Stack>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ marginBottom: "1rem" }}
        >
          {project.description}
        </Typography>
        <CardActions sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
          <CustomButton label="View Code" variant="Contained" width="100%" />
          <CustomButton label="View Live App" width="100%" />
        </CardActions>
      </Box>
    </Modal>
  );
};

export default ProjectModal;
