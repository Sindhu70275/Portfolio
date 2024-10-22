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
        flexDirection: { xs: "column-reverse", lg: "row" },
        marginTop: {xs:"3rem", lg:"5.7rem"},
        alignItems: "center",
      }}
    >
      <Grid item xs={12} lg={7}>
        <Stack>
          <CardContent>
            <Typography component="div" className="about-main-heading" sx={{ fontSize: {xs:"1.8rem", md:"3.1rem"}, fontWeight: "700" }}>
              Hi there!
              <br />
              I'm {Bio.name}
            </Typography>
            <Typography component="div" variant="h6" sx={{ fontSize: {xs:"1.5rem", md:"2rem"}, fontWeight: "600", marginY: "0.5rem" }}>
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
        lg={5}
        className="about-img-bg"
      >
        <CardMedia
          component="img"
          image="/Profile.jpeg"
          alt="my-profile"
          sx={{
            width: "100%",
            height: "100%", 
            maxWidth: { xs:"280px", md:"400px"},
            maxHeight: { xs:"280px", md:"400px"},
            borderRadius: "50%", 
            border: "6px solid #baa4ee",
          }}
        />
      </Grid>
    </Grid>
  );
};

export default About;
