import React from "react";
import { Card, Box, Button, Typography } from "@mui/material";
import ProbabilitySemiCircle from "./../ProbabilitySemiCircle";

function MarketCard({
  title,
  imageUrl,
  probability,
  volume,
  href,
  onYes,
  onNo,
}) {
  return (
    <Card
      sx={{
        p: 1.5,
        height:170,
        width:340,
        display: "flex",
        flexDirection: "column",
        gap: 1.5,
        borderRadius: 2,
        boxShadow: 3,
        bgcolor: "#2F3F50",
        color: "white",
        transition: "all 0.2s",
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: 6,
        },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Box
          component="img"
          src={'https://img.lightshot.app/1h7H_HvmQdKbfyZ5kEuLLw.png'}
          alt={title}
          sx={{
            width: 38,
            height: 38,
            borderRadius: 1,
            objectFit: "cover",
          }}
        />
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 600,
            flex: 1,
            lineHeight: "18px",
          }}
        >
          {title}
        </Typography>
        <ProbabilitySemiCircle value={probability} />
      </Box>


      <Box sx={{ display: "flex", gap: 1 }}>
        <Button
          variant="contained"
          onClick={onYes}
          sx={{
            flex: 1,
            bgcolor: "#4ade80",
            color: "white",
            textTransform: "none",
            fontSize: 13,
            py: 1.25,
            "&:hover": { bgcolor: "#22c55e" },
          }}
        >
          Yes
        </Button>
        <Button
          variant="contained"
          onClick={onNo}
          sx={{
            flex: 1,
            bgcolor: "#f87171",
            color: "white",
            textTransform: "none",
            fontSize: 13,
            py: 1.25,
            "&:hover": { bgcolor: "#ef4444" },
          }}
        >
          No
        </Button>
      </Box>


      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 0.5,
        }}
      >
        <Typography sx={{ fontSize: 12, color: "rgba(255,255,255,0.7)" }}>
          ${volume} Vol.
        </Typography>
        <Typography sx={{ fontSize: 11, color: "rgba(255,255,255,0.7)" }}>
          Chance: {probability}%
        </Typography>
      </Box>
    </Card>
  );
}

export default MarketCard;
