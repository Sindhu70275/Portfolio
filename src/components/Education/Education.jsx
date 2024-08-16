import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import { education } from "../../constants/constants";

const Education = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Stack
      sx={{
        textAlign: "center",
        justifyContent: "center",
        marginTop: "5rem",
      }}
    >
      <Stack sx={{ margin: "1rem" }}>
        <Typography sx={{ fontSize: "2.5rem", fontWeight: "600" }}>
          Education
        </Typography>
        <Typography sx={{ fontSize: "1.2rem" }}>
          My educational journey has been a path of continuous learning and
          personal growth. Here’s a summary of my academic accomplishments.
        </Typography>
      </Stack>
      <Timeline position={isSmallScreen ? "right" : "alternate"}>
        {education.map((edu, index) => (
          <TimelineItem
            key={index}
            sx={
              isSmallScreen
                ? {
                  display: "flex",
                  flexDirection: "column",
                }
                : {}
            }
          >
            <TimelineSeparator
              sx={{
                margin: "1rem",
                display: isSmallScreen ? "none" : "flex",
              }}
            >
              <TimelineDot variant="outlined" />
              {index < education.length && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent sx={{
              border: "0.1px solid #baa4ee",
              boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
              borderRadius: "12px",
              padding: "12px 16px",
              marginBottom: "1rem"
            }}>
              <Typography sx={{
                fontSize: "1.5rem",
                fontWeight: "500"
              }}>
                {edu.institution}
              </Typography>
              <Typography sx={{
                fontSize: "1.2rem",
                fontWeight: "400",
              }}>{edu.degree}</Typography>
              <Typography sx={{
                fontSize: "1rem",
                fontWeight: "600",
                color: "#baa4ee"
              }}>{edu.date}</Typography>
              <Typography sx={{
                fontSize: "1rem",
                fontWeight: "400",
              }}>
                Grade: {edu.grade}
              </Typography>
              <Typography
                sx={{
                  fontSize: "1rem",
                  fontWeight: "300",
                  marginTop: "0.5rem",
                }}
              >
                {edu.desc}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Stack>
  );
};

export default Education;
