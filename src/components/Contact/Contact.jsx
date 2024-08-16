import SvgIcon from "@mui/material/SvgIcon";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import GitHubIcon from "@mui/icons-material/GitHub";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";

import { Bio } from "../../constants/constants";
import "./Contact.css";

const Contact = () => {
  return (
    <Stack className="contact-container">
      <Stack sx={{ display: "flex", flexDirection: "row", gap: "1.5rem", margin: "2rem", color: "#0D0D0D" }}>
        <a href={Bio.email} target="_blank">
          <Tooltip title="Email" arrow>
            <SvgIcon sx={{ color: "#0D0D0D" }}>
              <MailIcon />
            </SvgIcon>
          </Tooltip>
        </a>
        <a href={Bio.linkedin} target="_blank">
          <Tooltip title="LinkedIn" arrow>
            <SvgIcon sx={{ color: "#0D0D0D" }}>
              <LinkedInIcon />
            </SvgIcon>
          </Tooltip>
        </a>
        <a href={Bio.github} target="_blank">
          <Tooltip title="GitHub" arrow>
            <SvgIcon sx={{ color: "#0D0D0D" }}>
              <GitHubIcon />
            </SvgIcon>
          </Tooltip>
        </a>
      </Stack>
      <Typography sx={{ color: "#0009" }}>{Bio.name} 2024</Typography>
    </Stack>
  );
};

export default Contact;
