import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InfoIcon from "@mui/icons-material/Info";
import CloseIcon from "@mui/icons-material/Close";

// Définition des étapes de la popup
// Chaque étape contient une image et du contenu JSX (titre + texte)
const steps = [
  {
    image: "/images/HowItWork1.png",
    content: (
      <>
        <Typography variant="h5" gutterBottom>
          1. Pick a Polymarket
        </Typography>
        <Typography variant="body1">
          Buy 'Yes' or 'No' shares depending on your prediction. Buying shares
          is like betting on the outcome. Odds shift in real time as other
          traders bet.
        </Typography>
      </>
    ),
  },
  {
    image: "/images/HowItWork2.png",
    content: (
      <>
        <Typography variant="h5" gutterBottom>
          2. Place a Bet
        </Typography>
        <Typography variant="body1">
          Fund your account with crypto, credit/debit card, or bank
          transfer—then you're ready to bet. No bet limits and no fees.
        </Typography>
      </>
    ),
  },
  {
    image: "/images/HowItWork3.png",
    content: (
      <>
        <Typography variant="h4" gutterBottom>
          3. Profit 🤑
        </Typography>
        <Typography variant="body1">
          Sell your 'Yes' or 'No' shares at any time, or wait until the market
          ends to redeem winning shares for $1 each. Create an account and place
          your first trade in minutes.
        </Typography>
      </>
    ),
  },
];

export default function How() {
  // -----------------------------
  // STATE
  // -----------------------------
  // open : indique si la popup est ouverte ou non
  const [open, setOpen] = useState(false);
  // activeStep : l'étape actuelle affichée dans le dialogue
  const [activeStep, setActiveStep] = useState(0);

  // Récupération du thème MUI pour utiliser ses couleurs
  const theme = useTheme();

  // -----------------------------
  // FONCTION : handleNext
  // -----------------------------
  // Passe à l'étape suivante ou ferme la popup si on est à la dernière étape
  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      setOpen(false); // fermer la popup
      setActiveStep(0); // remettre à la première étape
    } else {
      setActiveStep((prev) => prev + 1); // étape suivante
    }
  };

  // -----------------------------
  // RENDER
  // -----------------------------
  return (
    <>
      {/* Bouton principal pour ouvrir la popup "How it works" */}
      <Button
        color="info"
        startIcon={<InfoIcon />}
        sx={{ ml: 2, height: 40, whiteSpace: "nowrap" }}
        onClick={() => setOpen(true)}
      >
        How it works
      </Button>

      {/* Popup Dialog */}
      <Dialog
        open={open} // ouverture selon l'état
        onClose={() => setOpen(false)} // fermer quand on clique en dehors
        maxWidth="sm" // largeur maximale du dialogue
        fullWidth
        slotProps={{
          // style personnalisé du papier (background)
          paper: {
            sx: {
              backgroundColor: theme.palette.background.default,
            },
          },
        }}
      >
        {/* Bouton pour fermer la popup */}
        <IconButton
          onClick={() => setOpen(false)}
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>

        {/* Contenu du dialogue */}
        <DialogContent sx={{ textAlign: "center", pt: 4 }}>
          {/* Image de l'étape active */}
          <img
            src={steps[activeStep].image}
            alt={`Step ${activeStep + 1}`}
            style={{
              width: "100%",
              maxHeight: 250,
              objectFit: "contain",
              marginBottom: 16,
            }}
          />

          {/* Contenu texte (titre + paragraphe) de l'étape active */}
          {steps[activeStep].content}
        </DialogContent>

        {/* Boutons en bas de la popup */}
        <DialogActions sx={{ justifyContent: "center", pb: 2 }}>
          <Button variant="contained" onClick={handleNext}>
            {/* Change le texte selon l'étape : "Suivant" ou "Fermer" */}
            {activeStep === steps.length - 1 ? "Fermer" : "Suivant"}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
