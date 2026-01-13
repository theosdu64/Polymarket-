import { Card, Box, Button, Typography } from "@mui/material";
import ProbabilitySemiCircle from "./../ProbabilitySemiCircle";

/* gift card */
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';

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
        position: "relative", // required for absolute children
        pt: -1,
        px: 1,
        pb: 0,
        minHeight:175,
        width: {
          xs: "100%",   // mobile
          sm: 320,      // tablets
          md: 340,      // desktop
        },
        display: "flex",
        flexDirection: "column",
        gap: 1,
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
      {/*LINE 1 */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
        <Box
          component="img"
          src={imageUrl/*'https://img.lightshot.app/1h7H_HvmQdKbfyZ5kEuLLw.png'*/}
          alt={title}
          sx={{
            width: 38,
            height: 38,
            borderRadius: 1,
            objectFit: "cover",
          }}
        />
        <Typography
          component="a"
          href={href}
          sx={{
            fontSize: 13,
            fontWeight: 400,
            flex: 1,
            lineHeight: "18px",
            color: "inherit",
            textDecoration: "none",
            cursor: "pointer",

            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          <b>{title}</b>
        </Typography>
        
        <Box
          sx={{
            position: "relative",
            top: -20,     // move UP (smaller = higher)
            right: -30,   // move RIGHT
          }}
        >
          <ProbabilitySemiCircle value={probability} />
        </Box>



      </Box>
      {/*LINE 2 */}
      {/*GAP BTWEEN BUTTONS */}
      <Box sx={{ display: "flex", gap: 1 }}>
        <Button
          variant="contained"
          onClick={onYes}
          sx={{
            flex: 1,
            bgcolor: "marketCard.yes.background",
            color: "marketCard.yes.main",
            textTransform: "none",
            fontSize: 13,
            py: 1.25,
            "&:hover": { color:'white',bgcolor: "marketCard.yes.main" },
          }}
        >
          Yes
        </Button>
        <Button
          variant="contained"
          onClick={onNo}
          sx={{
            flex: 1,
            bgcolor: "marketCard.no.background",
            color: "white",
            color:'marketCard.no.main',
            textTransform: "none",
            fontSize: 13,
            py: 1.25,
            "&:hover": { color:'white',bgcolor: "marketCard.no.main" },
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
          <TurnedInNotOutlinedIcon/>
        </Typography>
      </Box>
    </Card>
  );
}

export default MarketCard;
