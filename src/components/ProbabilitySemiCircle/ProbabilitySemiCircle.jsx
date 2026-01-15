import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

function ProbabilitySemiCircle({ value = 30 }) {
  const getColor = (val) => {
    if (val >= 70) return "success.main";
    if (val >= 40) return "warning.main";
    return "error.main";
  };

  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
        transform: "rotate(-90deg)",
        width: 100,
        height: 100,
        overflow: "hidden",
      }}
    >
      <Box position="relative" display="inline-flex">
        <CircularProgress
          variant="determinate"
          value={50}
          size={60}
          thickness={3}
          sx={{
            color: "#e0e0e0",
            position: "absolute",
            left: 0,
          }}
        />

        <CircularProgress
          variant="determinate"
          value={value / 2}
          size={60}
          thickness={3}
          sx={{
            color: getColor(value),
          }}
        />
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: -20,
          left: -25,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: "rotate(90deg)",
        }}
      >
        <Typography
          variant="caption"
          color="textPrimary"
          sx={{
            fontSize: "1rem", 
            fontWeight: "bold", 
            textAlign: "center",
          }}
        >
          {value}%
          <br />
          <sup style={{ fontSize: "0.75rem", fontWeight: "normal" ,color: "#9e9e9e"}}>
            chance
          </sup>
        </Typography>
      </Box>
    </Box>
    //</Box>
  );
}

export default ProbabilitySemiCircle;
