import React from "react";
import { Box, LinearProgress, Typography } from "@mui/material";

function ProbabilityBar({ value = 30 }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: 60 }}>
      {/* Barra horizontal */}
      <LinearProgress
        variant="determinate"
        value={value}
        sx={{ width: '100%', height: 8, borderRadius: 4 }}
      />

      {/* Porcentagem */}
      <Typography variant="caption" sx={{ mt: 0.5 }}>
        {value}%
      </Typography>
    </Box>
  );
}

export default ProbabilityBar;
