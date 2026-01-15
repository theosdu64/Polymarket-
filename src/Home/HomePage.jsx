import { Container, Grid, Box } from "@mui/material";
import Footer from "../footer/footer";
import HeaderBar from "../header/HeaderBar";
import MenuTop1 from "../menuTop1/MenuTop1";
import MarketCard from "../components/MarketCard/MarketCard";
import MarketCardMulti from "../components/MarketCard/MarketCard";
import Data from "../../data.json";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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

  const handleYes = (marketId, deadlineId = null) => {
    if (deadlineId) {
      console.log("YES clicked:", marketId, "deadline:", deadlineId);
    } else {
      console.log("YES clicked:", marketId);
    }
    // Ajoutez votre logique ici (ex: ouvrir modal de trade)
  };

  const handleNo = (marketId, deadlineId = null) => {
    if (deadlineId) {
      console.log("NO clicked:", marketId, "deadline:", deadlineId);
    } else {
      console.log("NO clicked:", marketId);
    }
    // Ajoutez votre logique ici (ex: ouvrir modal de trade)
  };

  const renderMarketCard = (market) => {
    // Si le marché a des deadlines multiples
    if (market.type === "multi-deadline" && market.deadlines) {
      return (
        <MarketCardMulti
          title={market.title}
          imageUrl={market.image}
          deadlines={market.deadlines}
          volume={market.volume}
          onClick={() => navigate(`/card/${market.id}`)}
          onYes={(deadlineId) => handleYes(market.id, deadlineId)}
          onNo={(deadlineId) => handleNo(market.id, deadlineId)}
        />
      );
    }

    // Carte standard Yes/No
    return (
      <MarketCard
        title={market.title}
        imageUrl={market.image}
        probability={Math.round(market.outcomes[0].probability * 100)}
        volume={market.volume}
        onClick={() => navigate(`/card/${market.id}`)}
        onYes={() => handleYes(market.id)}
        onNo={() => handleNo(market.id)}
      />
    );
  };

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "background.default",
      }}
    >
      {/* Header sticky */}
      <Box
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 1100,
          borderBottom: "1px solid #3d5266",
          backgroundColor: "background.default",
        }}
      >
        <HeaderBar setSearchTerm={setSearchTerm} />
        <MenuTop1 onChangeCategory={setCategory} />
      </Box>

      {/* Contenu principal */}
      <Box sx={{ flex: 1 }}>
        <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            {filteredMarkets.map((market) => (
              <Grid 
                item 
                xs={12} 
                sm={6} 
                md={4} 
                lg={3} 
                key={market.id}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {renderMarketCard(market)}
              </Grid>
            ))}
          </Grid>

          {/* Message si aucun résultat */}
          {filteredMarkets.length === 0 && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: 200,
                color: "rgba(255,255,255,0.5)",
              }}
            >
              No markets found matching your criteria
            </Box>
          )}
        </Container>
      </Box>

      {/* Footer */}
      <Footer />
    </Container>
  );
}