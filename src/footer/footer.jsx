import React from "react";
import { Box, Button } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        backgroundColor: "#0b0e14",
        borderTop: "1px solid #1f2937",
        py: 2,
      }}
    >
      <Box
        sx={{
          maxWidth: 1280,
          mx: "auto",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexWrap: "wrap",
          px: 2,
        }}
      >
        {["Privacy", "Terms of Use", "Learn", "Careers", "Press"].map(
          (label) => (
            <Button
              key={label}
              variant="text"
              sx={{
                color: "#9ca3af",
                textTransform: "none",
                fontSize: "0.875rem",
                "&:hover": {
                  color: "#ffffff",
                  backgroundColor: "transparent",
                },
                my: 1,
              }}
            >
              {label}
            </Button>
          )
        )}
      </Box>
    </Box>
  );
};

export default Footer;
