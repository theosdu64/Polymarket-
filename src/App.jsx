import { Container, Grid } from '@mui/material';
import Footer from "./footer/footer";
import HeaderBar from './header/HeaderBar'
import MarketCard from './components/MarketCard/MarketCard'
import MenuTop1 from './MenuTop1/MenuTop1'
import Data from '../data.json'
import './App.css'

export default function App() {
  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <HeaderBar />
        <MenuTop1 />
      <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {Data.markets.map((market) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={market.id}>
              <MarketCard title={market.title} />
            </Grid>
          ))}
        </Grid>
      </Container>
      
      <Footer />
    </Container>
  );
}