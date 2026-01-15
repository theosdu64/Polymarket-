import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Divider,
  Typography,
  Box,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import "./LoginSignUp.css";

// Composant pour le logo Metamask depuis public/images
const MetamaskIcon = (props) => (
  <img src="/images/metamask.svg" alt="Metamask" {...props} />
);

// Composant pour le logo Metamask depuis public/images
const CoinBaseIcon = (props) => (
  <img src="/images/coinbase.svg" alt="Coinbase" {...props} />
);

// Composant pour le logo Metamask depuis public/images
const PhantomIcon = (props) => (
  <img src="/images/phantom.svg" alt="Coinbase" {...props} />
);

// Composant pour le logo Metamask depuis public/images
const WalletIcon = (props) => (
  <img src="/images/walletconnect.svg" alt="Coinbase" {...props} />
);

const MetamaskButton = () => (
  <Button
    variant="outlined"
    sx={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      width: 56,
      height: 56,
      minWidth: 0,
      border: "1px solid #ccc",
      borderRadius: 1,
      padding: 0,
      transition: "all 0.2s ease",
      "&:hover": {
        transform: "scale(1.03)",
        borderColor: "#FF8D5D",
      },
      "&:active": {
        transform: "scale(0.97)",
      },
    }}
  >
    <Box sx={{ width: 32, height: 32 }}>
      <MetamaskIcon width="100%" height="100%" />
    </Box>
  </Button>
);

const CoinBaseButton = () => (
  <Button
    variant="outlined"
    sx={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      width: 56,
      height: 56,
      minWidth: 0,
      border: "1px solid #ccc",
      borderRadius: 1,
      padding: 0,
      transition: "all 0.2s ease",
      "&:hover": {
        transform: "scale(1.03)",
        borderColor: "#FF8D5D",
      },
      "&:active": {
        transform: "scale(0.97)",
      },
    }}
  >
    <Box sx={{ width: 32, height: 32 }}>
      <CoinBaseIcon width="100%" height="100%" />
    </Box>
  </Button>
);

const PanthomButton = () => (
  <Button
    variant="outlined"
    sx={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      width: 56,
      height: 56,
      minWidth: 0,
      border: "1px solid #ccc",
      borderRadius: 1,
      padding: 0,
      transition: "all 0.2s ease",
      "&:hover": {
        transform: "scale(1.03)",
        borderColor: "#FF8D5D",
      },
      "&:active": {
        transform: "scale(0.97)",
      },
    }}
  >
    <Box sx={{ width: 32, height: 32 }}>
      <PhantomIcon width="100%" height="100%" />
    </Box>
  </Button>
);

const WalletButton = () => (
  <Button
    variant="outlined"
    sx={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      width: 56,
      height: 56,
      minWidth: 0,
      border: "1px solid #ccc",
      borderRadius: 1,
      padding: 0,
      transition: "all 0.2s ease",
      "&:hover": {
        transform: "scale(1.03)",
        borderColor: "#FF8D5D",
      },
      "&:active": {
        transform: "scale(0.97)",
      },
    }}
  >
    <Box sx={{ width: 32, height: 32 }}>
      <WalletIcon width="100%" height="100%" />
    </Box>
  </Button>
);

export default function LoginSignUpBtn() {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState(""); // "login" ou "signup"

  const handleClickOpen = (dialogType) => {
    setType(dialogType);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <div className="loginSignUpWrapper">
      {/* BOUTONS PRINCIPAUX */}
      <Button
        id="login"
        variant="text"
        onClick={() => handleClickOpen("login")}
      >
        Log In
      </Button>
      <Button
        id="Sign-up"
        variant="contained"
        onClick={() => handleClickOpen("signup")}
      >
        Sign Up
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="xs"
        PaperProps={{
          sx: {
            backgroundColor: "background.default",
            color: "text.primary",
            borderRadius: 3, // <-- arrondit les angles (plus le chiffre, plus c'est rond)
          },
        }}
      >
        <DialogTitle sx={{ textAlign: "center" }}>
          Welcome to Polymarket
        </DialogTitle>

        <DialogContent>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {/* Continue with Google */}
            <Button
              fullWidth
              variant="contained"
              startIcon={<GoogleIcon />}
              sx={{
                textTransform: "none",
                bgcolor: "#2c9cdb",
                color: "secondary.main",
                "&:hover": { bgcolor: "primary.dark" },
              }}
            >
              Continue with Google
            </Button>

            {/* OR divider */}
            <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
              <Divider sx={{ flex: 1, borderColor: "text.secondary" }} />
              <Typography sx={{ mx: 1, fontSize: 14, color: "text.secondary" }}>
                OR
              </Typography>
              <Divider sx={{ flex: 1, borderColor: "text.secondary" }} />
            </Box>

            {/* Email form */}
            <Box sx={{ position: "relative", width: "100%" }}>
              <TextField
                fullWidth
                placeholder="Email address"
                type="email"
                variant="outlined"
                size="small"
                InputProps={{
                  sx: {
                    color: "text.primary",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "text.secondary",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "primary.main",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "primary.main",
                    },
                    backgroundColor: "marketCard.background",
                  },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  position: "absolute",
                  right: 0,
                  top: "50%",
                  transform: "translateY(-50%)",
                  px: 2,
                  py: 0.5,
                  borderRadius: 1,
                  bgcolor: "#2c9cdb",
                  color: "secondary.main",
                  "&:hover": { bgcolor: "primary.dark" },
                }}
              >
                Continue
              </Button>
            </Box>

            {/* Social buttons centrés */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
                mt: 1,
                mb: 2,
              }}
            >
              <MetamaskButton />
              <CoinBaseButton />
              <PanthomButton />
              <WalletButton />
            </Box>

            {/* Footer */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 1,
                fontSize: 12,
                color: "text.secondary",
              }}
            >
              <a href="/tos" target="_blank" rel="noopener noreferrer">
                Terms
              </a>
              <span>•</span>
              <a href="/privacy" target="_blank" rel="noopener noreferrer">
                Privacy
              </a>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
}
