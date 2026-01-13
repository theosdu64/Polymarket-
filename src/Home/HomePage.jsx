import { Container, Grid, Box } from "@mui/material";
import Footer from "../footer/footer";
import HeaderBar from "../header/HeaderBar";
import MarketCard from "../components/MarketCard/MarketCard";
import MenuTop1 from "../menuTop1/MenuTop1";
import Data from "../../data.json";
import "./home.css";

export default function Home() {
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
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {Data.markets.map((market) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={market.id}>
              <MarketCard
                title={market.title}
                volume={market.volume}
                probability={
                  Math.round(market.outcomes[0].probability * 1000) / 10
                }
              />
            </Grid>
          ))}
        </Grid>
      </Container>

      <Footer />
    </Container>
  );
}
