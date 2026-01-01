import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import { skills } from "../../constants/constants";
import "./Skills.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Skills = () => {
  return (
    <Grid
      container
      sx={{ textAlign: "center", justifyContent: "center", marginTop: "5rem" }}
    >
      <Grid item xs={12} sx={{ marginBottom: "1rem" }}>
        <Typography sx={{ fontSize: "2.5rem", fontWeight: "600" }}>
          Skills
        </Typography>
        <Typography sx={{ fontSize: "1.2rem" }}>
          A Snapshot of My Technical Expertise
        </Typography>
      </Grid>
      {skills.map((skill, index) => (
        <Grid item xs={12} md={6} key={index}>
          <Item
            sx={{
              border: "0.1px solid #baa4ee",
              borderRadius: "1rem",
              boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
              padding: "18px 36px",
              margin: "1rem",
            }}
          >
            <Typography variant="h6" sx={{ marginBottom: "1rem" }}>
              {skill.title}
            </Typography>
            <Grid container spacing={2} sx={{ justifyContent: "center" }}>
              {skill.skills.map((item, idx) => (
                <Grid item key={idx}>
                  <Stack
                    sx={{
                      border: "0.1px solid #baa4ee",
                      boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
                      fontWeight: "400",
                      borderRadius: "12px",
                      padding: "0.75rem 1rem",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      fontSize: "1rem",
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="skill-img"
                    />
                    <Typography>{item.name}</Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Item>
        </Grid>
      ))}
    </Grid>
  );
};

export default Skills;
