import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Box } from "@mui/material";
import HeaderBar from "../header/HeaderBar";
import MenuTop1 from "../menuTop1/MenuTop1";
import { Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { LineChart } from '@mui/x-charts/LineChart';
import DropdownToggleButton from "../components/DropdownToggleButton";
import TradeSelector from "../components/TradeSelector";


export default function DetailCard() {
  const { id } = useParams();
  //get object from json

  const [bet, setBet] = useState(null);

  useEffect(() => {
    fetch("./../../data.json")
      .then(res => res.json())
      .then(data => {
        const market = data.markets.find(m => m.id === id);
        setBet(market);
      })
      .catch(err => console.error(err));
  }, [id]);


  const margin = { right: 24 };
  const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490,1440, 1080, 4096, 1000, 4000, 5300];
  const xLabels = [
    'JAN 1',
    'JAN 2',
    'JAN 3',
    'JAN 4',
    'JAN 5',
    'JAN 6',
    'JAN 7',
    'JAN 8',
    'JAN 9',
    'JAN 10',
    'JAN 11',
    'JAN 12',
    'JAN 13',
  ];

  if (!bet) return <p>Loading...</p>;

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

          <Box display="flex" gap={2} mt={2}>
            {/* Lado esquerdo: 2/3 da largura com todo o conteúdo */}
            <Box flex={2} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {/* Cabeçalho com imagem e título */}
              <Box display="flex" alignItems="center" gap={1} justifyContent="flex-start">
                <Box
                  component="img"
                  src={bet.image}
                  alt="title"
                  sx={{
                    width: 38,
                    height: 38,
                    borderRadius: 1,
                    objectFit: "cover",
                  }}
                />
                <Typography variant="h5">{bet.title}</Typography>
              </Box>

              {/* Info adicional */}
              <Typography
                variant="body2"
                sx={{ fontSize: "12px", display: "flex", alignItems: "center", gap: 0.5 }}
              >
                ${bet.volume} Vol
                <AccessTimeIcon sx={{ fontSize: "14px" }} />
                {bet.endDate}
              </Typography>

              {/* Gráfico */}
              <Box sx={{ width: '100%', height: 300 }}>
                <LineChart
                  series={[{ data: uData, yAxisId: 'leftAxisId' }]}
                  xAxis={[{ scaleType: 'point', data: xLabels }]}
                  yAxis={[
                    { id: 'leftAxisId', width: 50 },
                    { id: 'rightAxisId', position: 'right' },
                  ]}
                />
              </Box>

              {/* Dropdowns */}
              <DropdownToggleButton label="Order Book" color="primary.main">
                <p>Dropdown content.</p>
                <ul>
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                </ul>
              </DropdownToggleButton>

              <DropdownToggleButton label="Order Book" color="primary.main">
                <p>Dropdown content.</p>
                <ul>
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                </ul>
              </DropdownToggleButton>


            </Box>

            {/* Lado direito: 1/3 da largura vazio */}
            <Box flex={1}>
              {/* Espaço vazio para futuro conteúdo */}
              <TradeSelector bet={bet} onTrade={(data) => console.log("Executando trade:", data)} />

            </Box>
          </Box>
        </Container>

      </Box>
    </Container>
  );
}
