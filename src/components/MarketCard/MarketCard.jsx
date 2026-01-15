import { Card, Box, Button, Typography } from "@mui/material";
import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";

function DeadlineRow({ label, probability, onYes, onNo }) {
  const probPercent = Math.round(probability * 100);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        py: 0.5,
      }}
    >
      <Typography
        sx={{
          fontSize: 13,
          color: "rgba(255,255,255,0.85)",
          flex: 1,
          minWidth: 0,
        }}
      >
        {label}
      </Typography>
      <Typography
        sx={{
          fontSize: 14,
          fontWeight: 700,
          color: "white",
          minWidth: 45,
          textAlign: "right",
          mr: 1,
        }}
      >
        {probPercent}%
      </Typography>
      <Button
        variant="contained"
        onClick={onYes}
        sx={{
          minWidth: 48,
          maxWidth: 48,
          px: 1,
          py: 0.4,
          bgcolor: "rgba(0, 200, 83, 0.15)",
          color: "#00c853",
          textTransform: "none",
          fontSize: 12,
          fontWeight: 600,
          borderRadius: 1,
          boxShadow: "none",
          "&:hover": {
            bgcolor: "#00c853",
            color: "white",
            boxShadow: "none",
          },
        }}
      >
        Yes
      </Button>

      <Button
        variant="contained"
        onClick={onNo}
        sx={{
          minWidth: 48,
          maxWidth: 48,
          px: 1,
          py: 0.4,
          bgcolor: "rgba(255, 82, 82, 0.15)",
          color: "#ff5252",
          textTransform: "none",
          fontSize: 12,
          fontWeight: 600,
          borderRadius: 1,
          boxShadow: "none",
          "&:hover": {
            bgcolor: "#ff5252",
            color: "white",
            boxShadow: "none",
          },
        }}
      >
        No
      </Button>
    </Box>
  );
}

function MarketCardMulti({
  title,
  imageUrl,
  deadlines = [],
  volume,
  onClick,
  onYes,
  onNo,
}) {
  const formatVolume = (vol) => {
    if (vol >= 1000000) {
      return `$${(vol / 1000000).toFixed(0)}m`;
    } else if (vol >= 1000) {
      return `$${(vol / 1000).toFixed(0)}k`;
    }
    return `$${vol}`;
  };

  return (
    <Card
      onClick={onClick}
      sx={{
        position: "relative",
        p: 1.5,
        minHeight: 175,
        width: {
          xs: "100%",
          sm: 350,
          md: 350,
        },
        display: "flex",
        flexDirection: "column",
        gap: 0.5,
        borderRadius: 2,
        boxShadow: 3,
        bgcolor: "#2F3F50",
        color: "white",
        cursor: "pointer",
        transition: "all 0.2s ease-in-out",
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: 6,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          gap: 1.2,
          mb: 1,
        }}
      >
        <Box
          component="img"
          src={imageUrl}
          alt={title}
          sx={{
            width: 40,
            height: 40,
            borderRadius: 1,
            objectFit: "cover",
            flexShrink: 0,
          }}
        />
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 600,
            flex: 1,
            lineHeight: 1.3,
            color: "white",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {title}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 0.25,
          flex: 1,
        }}
      >
        {deadlines.map((deadline) => (
          <DeadlineRow
            key={deadline.id}
            label={deadline.label}
            probability={deadline.probability}
            onYes={(e) => {
              e.stopPropagation();
              onYes?.(deadline.id);
            }}
            onNo={(e) => {
              e.stopPropagation();
              onNo?.(deadline.id);
            }}
          />
        ))}
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: "auto",
          pt: 1,
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <Typography
            sx={{
              fontSize: 12,
              color: "rgba(255,255,255,0.6)",
            }}
          >
            {formatVolume(volume)} Vol.
          </Typography>
          <SwapHorizIcon
            sx={{
              fontSize: 14,
              color: "rgba(255,255,255,0.4)",
            }}
          />
        </Box>
        <TurnedInNotOutlinedIcon
          onClick={(e) => {
            e.stopPropagation();
          }}
          sx={{
            fontSize: 20,
            color: "rgba(255,255,255,0.4)",
            cursor: "pointer",
            "&:hover": {
              color: "rgba(255,255,255,0.8)",
            },
          }}
        />
      </Box>
    </Card>
  );
}

export default MarketCardMulti;