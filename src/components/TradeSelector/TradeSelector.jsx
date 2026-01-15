import React, { useState } from "react";
import { Box, Button, Stack, Typography, ToggleButton, ToggleButtonGroup, Paper  } from "@mui/material";

export default function TradeCard({bet}) {
    const [action, setAction] = useState("SELL"); // BUY ou SELL
    const [selectedOption, setSelectedOption] = useState(0); // 0 = Yes, 1 = No
    const [betPercent, setBetPercent] = useState(null); // 25, 50, Max

    const handleActionChange = (event, newAction) => {
        if (newAction !== null) setAction(newAction);
    };

    const options = [
        { label: "Yes", value: 0, price: bet.outcomes[0].price+"¢", color: "green" },
        { label: "No", value: 1, price: bet.outcomes[1].price+"¢", color: "red" },
    ];

    return (
        
    <Paper
        elevation={3}
        sx={{
            width: 340,
            p: 0.5,
            borderRadius: 3,
            border: "1px solid #6a6a6a",
            display: "flex",
            flexDirection: "column",
            gap: 3,
            backgroundColor: "primary.main",
        }}
        >
        {/* Toggle Buy/Sell */}
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
                sx={{ gap: 2 }}
            >
            <ToggleButton
                value="BUY"
                sx={{
                    color:'#ffffff',
                    fontWeight: "bold",
                    fontSize: 16,
                    opacity: action === "BUY" ? 1 : 0.4,
                }}
            >
                Buy
            </ToggleButton>
            <ToggleButton
                value="SELL"
                sx={{
                    color:'#ffffff',
                    fontWeight: "bold",
                    fontSize: 16,
                    position: "relative",
                    opacity: action === "SELL" ? 1 : 0.4,
                    "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: -6,
                        left: 0,
                        width: "100%",
                        height: 3,
                        borderRadius: 1.5,
                        backgroundColor: action === "SELL" ? "primary.main" : "transparent",
                    },
                }}
            >
                Sell
            </ToggleButton>
            </ToggleButtonGroup>

            <Button color={'yellow'} size="small" variant="outlined">
            Market ▼
            </Button>
        </Box>

        {/* Yes / No options */}
        <Stack direction="row" spacing={1}>
            {options.map((opt) => (
            <Button
                key={opt.value}
                variant={selectedOption === opt.value ? "contained" : "outlined"}
                color={opt.color === "green" ? "success" : opt.color === "red" ? "error" : "primary"} // mapeando cores
                fullWidth
                onClick={() => setSelectedOption(opt.value)}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 0.5,
                    py: 1.5,
                }}
                >
                <Typography fontSize={14} fontWeight={600} opacity={selectedOption === opt.value ? 1 : 0.7}>
                {opt.label}  {opt.price}
                </Typography>
            </Button>
            ))}
        </Stack>

        {/* Bet percentages */}
        <Stack direction="row" spacing={1} justifyContent="flex-end">
            {[25, 50, "MAX"].map((val) => (
            <Button
                key={val}
                variant={betPercent === val ? "contained" : "outlined"}
                color={action === "BUY" ? "success" : "error"}
                onClick={() => setBetPercent(val)}
                size="small"
            >
                {val}%
            </Button>
            ))}
        </Stack>

        <Button
            variant="contained"
            sx={{
                backgroundColor: 'rgb(0, 145, 255)',
                '&:hover': { backgroundColor: 'rgb(0, 125, 220)' },
                px: 3, // padding horizontal menor (default é maior)
            }}
            >
            Trade
            </Button>

    </Paper>
    );
}
