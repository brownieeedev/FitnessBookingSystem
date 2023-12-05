import React from "react";

//MUI Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function ContactIcons() {
  return (
    <React.Fragment>
      <InstagramIcon
        onClick={() => {
          window.open("https://github.com/brownieeedev", "_blank");
        }}
        sx={{
          fontSize: "25px",
          "&:hover": {
            transform: "scale(1.15)",
            color: "#000000",
            cursor: "pointer",
          },
        }}
      />
      <YouTubeIcon
        onClick={() => {
          window.open(
            "https://www.linkedin.com/in/barna-csord%C3%A1s/",
            "_blank"
          );
        }}
        sx={{
          marginLeft: "6px",
          marginRight: "6px",
          fontSize: "25px",
          "&:hover": {
            transform: "scale(1.15)",
            color: "#000000",
            cursor: "pointer",
          },
        }}
      />
      <FacebookIcon
        sx={{
          fontSize: "25px",
          cursor: "default",
          "&:hover": {
            transform: "scale(1.15)",
            color: "#000000",
            cursor: "pointer",
          },
        }}
      />
    </React.Fragment>
  );
}
