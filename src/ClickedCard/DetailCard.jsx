import { useParams } from "react-router-dom";
import { Container, Box } from "@mui/material";
import HeaderBar from "../header/HeaderBar";
import MenuTop1 from "../menuTop1/MenuTop1";

export default function DetailCard() {
  const { id } = useParams();

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Box
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 1100,
          backgroundColor: "background.default",
        }}
      >
        <Container>
          <HeaderBar />
          <MenuTop1 />
          <h1>Détail de la card {id}</h1>
        </Container>
      </Box>
    </Container>
  );
}
