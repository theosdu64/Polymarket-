import { Button, Container, Typography } from "@mui/material";

export default function App() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Hello MUI 👋
      </Typography>

      <Button variant="contained" color="primary">
        Bouton MUI
      </Button>
    </Container>
  );
}
