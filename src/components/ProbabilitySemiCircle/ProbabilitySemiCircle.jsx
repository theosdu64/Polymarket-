import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

function ProbabilitySemiCircle({ value = 30 }) {
  // Determina a cor baseada na porcentagem
  const getColor = (val) => {
    if (val >= 70) return "success.main"; // verde
    if (val >= 40) return "warning.main"; // amarelo
    return "error.main"; // vermelho
  };

  return (
    //<Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Box
        sx={{
          position: "relative",
          display: "inline-flex",
          transform: "rotate(-90deg)", // compensa o rotate do box
          width: 100,
          height: 100, // metade da altura para semi-círculo
          overflow: "hidden",
        }}
      >
        <Box position="relative" display="inline-flex">
          <CircularProgress
            variant="determinate"
            value={50} // linha de referência de 50%
            size={50}
            thickness={3}
            sx={{
              color: "#e0e0e0", // cor da linha de background
              position: "absolute",
              left: 0,
            }}
          />

          <CircularProgress
            variant="determinate"
            value={value / 2} // progresso real
            size={50}
            thickness={3}
            sx={{
              color: getColor(value),
            }}
          />
        </Box>


        {/* Texto centralizado dentro do semi-círculo */}
        <Box
          sx={{
            position: "absolute",
            top: -23,
            left: -30,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: "rotate(90deg)", // compensa o rotate do box
          }}
        >
          <Typography variant="caption" color="textPrimary">
            <center>{value}%<br/><sup>chance</sup></center>
          </Typography>
        </Box>
      </Box>
    //</Box>
  );
}

export default ProbabilitySemiCircle;
