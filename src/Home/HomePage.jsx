import { Container, Grid, Box } from "@mui/material";
import Footer from "../footer/footer";
import HeaderBar from "../header/HeaderBar";
import MenuTop1 from "../menuTop1/MenuTop1";
import MarketCard from "../components/MarketCard/MarketCard";
import Data from "../../data.json";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MenuTop2 from "../components/MenuTop2/MenuTop2.jsx";

export default function Home() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMarkets = Data.markets.filter((market) => {
    const matchCategory =
      category === "All" || market.category === category;

    const matchSearch =
      market.title.toLowerCase().includes(searchTerm.toLowerCase());

    return matchCategory && matchSearch;
  });   


  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh", 
      }}
    >
      <Box
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 1100,
          borderBottom: "1px solid #3d5266",
          backgroundColor : 'background.default'
        }}
      >
          <HeaderBar setSearchTerm={setSearchTerm}/>
          <MenuTop1 onChangeCategory={setCategory} />
      </Box>

      <Box sx={{ flex: 1 }}>
          <MenuTop2 />
        <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            {filteredMarkets.map((market) => (
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
      </Box>

      <Footer />
    </Container>
  );
}