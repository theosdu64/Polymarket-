import React, { useState } from "react";
import {
  Box,
  Button,
  Stack,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  Paper,
} from "@mui/material";

export default function TradeCard({ bet }) {
  const [action, setAction] = useState("BUY"); // BUY ou SELL, default BUY
  const [selectedOption, setSelectedOption] = useState(0); // 0 = Yes, 1 = No
  const [betPercent, setBetPercent] = useState(null); // 25, 50, Max

  const handleActionChange = (event, newAction) => {
    if (newAction !== null) setAction(newAction);
  };

  const options = [
    {
      label: "Yes",
      value: 0,
      price: bet.outcomes[0].price + "¢",
      color: "green",
    },
    {
      label: "No",
      value: 1,
      price: bet.outcomes[1].price + "¢",
      color: "red",
    },
  ];

  return (
    <Paper
      elevation={3}
      sx={{
        width: 340,
        p: 1,
        borderRadius: 3,
        border: "1px solid #6a6a6a",
        display: "flex",
        flexDirection: "column",
        gap: 3,
        backgroundColor: "primary.main",
      }}
    >
      {/* Header Buy / Sell + Market */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        borderBottom="2px solid rgba(0,0,0,0.2)"
        pb={1}
      >
        <ToggleButtonGroup
          value={action}
          exclusive
          onChange={handleActionChange}
          sx={{
            gap: 2,
            "& .MuiToggleButton-root": {
              border: "none",
              color: "#9CA3AF",
              fontWeight: 600,
              fontSize: 14,
              textTransform: "none",
            },
            "& .Mui-selected": {
              color: "#fff",
              position: "relative",
              background: "transparent !important",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: -10,
                left: 0,
                width: "100%",
                height: 2,
                backgroundColor: "#fff",
                borderRadius: 2,
              },
            },
          }}
        >
          <ToggleButton value="BUY">Buy</ToggleButton>
          <ToggleButton value="SELL">Sell</ToggleButton>
        </ToggleButtonGroup>

        <Box sx={{ pr: "17px", position: "relative" }}>
          <Button
            color="yellow"
            size="medium"
            variant="text"
            sx={{ textTransform: "none", position: "relative" }}
          >
            Market
            <span
              style={{
                position: "absolute",
                bottom: "5px",
                left: "65px",
                userSelect: "none",
              }}
            >
              ▼
            </span>
          </Button>
        </Box>
      </Box>

      {/* YES / NO Buttons */}
      <Stack direction="row" spacing={2}>
        {options.map((opt) => {
          const isSelected = selectedOption === opt.value;

          return (
            <Button
              key={opt.value}
              onClick={() => setSelectedOption(opt.value)}
              sx={{
                flex: 1,
                py: 1.6,
                borderRadius: 2,
                textTransform: "none",
                fontSize: 15,
                fontWeight: 600,

                backgroundColor: isSelected
                  ? opt.color === "green"
                    ? "#6FAF78"
                    : "#374151"
                  : "#374151",

                color: isSelected
                  ? opt.color === "green"
                    ? "#E5FFE8"
                    : "#F87171"
                  : "#9CA3AF",

                border:
                  opt.color === "red" && isSelected
                    ? "1px solid #F87171"
                    : "1px solid transparent",

                "&:hover": {
                  backgroundColor: isSelected
                    ? opt.color === "green"
                      ? "#63A56C"
                      : "#374151"
                    : "#4B5563",
                },
              }}
            >
              {opt.label} {opt.price}
            </Button>
          );
        })}
      </Stack>

      <Stack direction="row" spacing={1.5} justifyContent="center">
        {[25, 50, "MAX"].map((val) => (
          <Button
            key={val}
            onClick={() => setBetPercent(val)}
            sx={{
              backgroundColor: "#374151",
              color: "#E5E7EB",
              minWidth: 0,
              px: 1.8,
              py: 0.6,
              fontSize: 13,
              borderRadius: 2,
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#4B5563",
              },
            }}
          >
            {val}%
          </Button>
        ))}
      </Stack>

      <Button
        fullWidth
        sx={{
          mt: 1,
          py: 1.6,
          fontSize: 16,
          fontWeight: 600,
          borderRadius: 2,
          backgroundColor: "#60A5FA",
          color: "#fff",
        }}
      >
        Trade
      </Button>
    </Paper>
  );
}
