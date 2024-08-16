import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const CustomButton = ({ label, variant, onClick, href, target, width }) => {
  return (
    <Button
      sx={{
        backgroundColor: variant === "Contained" ? "#baa4ee" : "white",
        color: variant === "Contained" ? "white" : "#baa4ee",
        border: variant === "Contained" ? "none" : "2px solid #baa4ee",
        borderRadius: "0.4rem",
        "&.MuiButtonBase-root:hover": {
          background: variant === "Contained" ? "#baa4ee" : "",
          color: variant === "Contained" ? "white" : "#baa4ee",
          borderColor: "inherit",
        },
        width: { width },
      }}
      onClick={onClick}
      target={target}
      href={href}
    >
      <Typography sx={{ textTransform: "capitalize" }}>{label}</Typography>
    </Button>
  );
};

export default CustomButton;
