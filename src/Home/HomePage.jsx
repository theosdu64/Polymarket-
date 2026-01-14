import { Container, Grid, Box } from "@mui/material";
import Footer from "../footer/footer";
import HeaderBar from "../header/HeaderBar";
import MenuTop1 from "../menuTop1/MenuTop1";
import MarketCard from "../components/MarketCard/MarketCard";
import Data from "../../data.json";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Box
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 1100,
          backgroundColor: "background.default",
          borderBottom: "1px solid #3d5266",
        }}
      >
        <Container>
          <HeaderBar />
          <MenuTop1 />
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {Data.markets.map((market) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={market.id}>
              <MarketCard
                title={market.title}
                imageUrl={market.image}
                probability={Math.round(market.outcomes[0].probability * 100)}
                volume={market.volume}
                onClick={() => navigate(`/card/${market.id}`)}
                onYes={() => console.log("YES", market.id)}
                onNo={() => console.log("NO", market.id)}
              />
            </Grid>
          ))}
        </Grid>
      </Container>

      <Footer />
    </Container>
  );
}
