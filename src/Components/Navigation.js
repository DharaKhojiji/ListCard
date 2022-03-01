import { BottomNavigationAction, BottomNavigation } from "@mui/material";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const Navigation = () => {
  return (
    <div>
      <BottomNavigation className="Navigation">
        <BottomNavigationAction
          sx={{ color: "white" }}
          label=""
          icon={<LinkedInIcon />}
        ></BottomNavigationAction>
        <BottomNavigationAction
          sx={{ color: "white" }}
          label=""
          icon={<InstagramIcon />}
        ></BottomNavigationAction>
        <BottomNavigationAction
          sx={{ color: "white" }}
          label=""
          icon={<FacebookIcon href="https://www.facebook.com/" />}
        ></BottomNavigationAction>
      </BottomNavigation>
    </div>
  );
};

export default Navigation;
