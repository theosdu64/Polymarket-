import { Button, Container, Typography, Box } from "@mui/material";
import Footer from "./footer/footer"; // importe ton footer

export default function App() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Contenu principal centré */}
      <Container sx={{ mt: 4, flex: 1, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Hello MUI 👋
        </Typography>

        <Button variant="contained" color="primary">
          Bouton MUI
        </Button>
      </Container>

      {/* Footer full width */}
      <Footer />
    </Box>
  );
}
