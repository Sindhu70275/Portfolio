import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { CardActions, CardMedia, Stack } from "@mui/material";
import { Typewriter } from "react-simple-typewriter";

import "./About.css";
import { Bio } from "../../constants/constants";
import CustomButton from "../../common/CustomButton";

const About = () => {
  return (
    <Grid
      container
      spacing={6}
      sx={{
        flexDirection: { xs: "column-reverse", md: "row" },
        marginTop: "5.7rem",
      }}
    >
      <Grid item xs={12} md={7}>
        <Stack>
          <CardContent>
            <Typography component="div" className="about-main-heading" sx={{ fontSize: "3.1rem", fontWeight: "700" }}>
              Hi there!
              <br />
              I'm {Bio.name}
            </Typography>
            <Typography component="div" variant="h6" sx={{ fontSize: "2rem", fontWeight: "600", marginY: "0.5rem" }}>
              I'm a{" "}
              <span style={{ color: "#baa4ee", fontWeight: "bold" }}>
                <Typewriter
                  words={Bio.roles}
                  loop={Infinity}
                  cursor
                  cursorStyle="|"
                  typeSpeed={150}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: "1.2rem" }}>
              {Bio.description}
            </Typography>
          </CardContent>
        </Stack>
        <CardActions>
          <CustomButton
            label="Resume"
            variant="Contained"
            target="display"
            href={Bio.resume}
          />
          <CustomButton
            label="LinkedIn"
            variant="Outlined"
            target="display"
            href={Bio.linkedin}
          />
        </CardActions>
      </Grid>
      <Grid
        item
        xs={12}
        md={5}
        className="about-img-bg"
        sx={{ marginTop: "4rem" }}
      >
        {/* <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="my-profile"
        /> */}
      </Grid>
    </Grid>
  );
};

export default About;
