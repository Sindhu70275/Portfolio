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

import { experience } from "../../constants/constants";

const Experience = () => {
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
          Experience
        </Typography>
        <Typography sx={{ fontSize: "1.2rem" }}>
          Elevating User Experiences: A Journey in ReactJS Development
        </Typography>
      </Stack>
      <Timeline position={isSmallScreen ? "right" : "alternate"}>
        {experience.map((item, index) => (
          <TimelineItem
            key={index}
            sx={{
              display: "flex",
              flexDirection: isSmallScreen ? "column" : "row",
            }}
          >
            <TimelineSeparator
              sx={{
                margin: "1rem",
                display: isSmallScreen ? "none" : "flex",
              }}
            >
              <TimelineDot variant="outlined" />
              {index < experience.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent
              sx={{
                border: "0.1px solid #baa4ee",
                boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
                borderRadius: "12px",
                padding: "12px 16px",
                marginBottom: "1rem",
              }}
            >
              <Typography sx={{ fontSize: "1.5rem", fontWeight: "500" }}>
                {item.company}
              </Typography>
              <Typography sx={{ fontSize: "1.2rem", fontWeight: "400" }}>
                {item.role}
              </Typography>
              <Typography
                sx={{
                  fontSize: "1rem",
                  fontWeight: "600",
                  color: "#baa4ee",
                  marginBottom: "0.5rem",
                }}
              >
                {item.date}
              </Typography>
              <Typography sx={{ fontSize: "1rem", fontWeight: "300" }}>
                {item.details}
              </Typography>
              {item.technologies && item.technologies.length > 0 && (
                <Typography
                  sx={{
                    fontSize: "1rem",
                    fontWeight: "200",
                    marginTop: "0.8rem",
                  }}
                >
                  <span style={{ fontWeight: 500 }}>Technologies:</span>{" "}
                  {item.technologies.join(", ")}
                </Typography>
              )}
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Stack>
  );
};

export default Experience;
