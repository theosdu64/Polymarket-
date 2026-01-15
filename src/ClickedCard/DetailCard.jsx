import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Box } from "@mui/material";
import HeaderBar from "../header/HeaderBar";
import MenuTop1 from "../menuTop1/MenuTop1";
import { Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { LineChart, lineElementClasses } from '@mui/x-charts/LineChart';
import DropdownToggleButton from "../components/DropdownToggleButton";


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
  const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
  const xLabels = [
    'Page A',
    'Page B',
    'Page C',
    'Page D',
    'Page E',
    'Page F',
    'Page G',
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
          <Box>
            <Box
              component="img"
              src={bet.image/*'https://img.lightshot.app/1h7H_HvmQdKbfyZ5kEuLLw.png'*/}
              alt={'title'}
              sx={{
                width: 38,
                height: 38,
                borderRadius: 1,
                objectFit: "cover",
              }}
            />
            <div>
              <Typography variant="h5">{bet.title}</Typography>
              <Typography 
                variant="body2" 
                sx={{ fontSize: "12px", display: "flex", alignItems: "center", gap: 0.5 }}
              >
                ${bet.volume} Vol
                <AccessTimeIcon sx={{ fontSize: "14px" }} />
                {bet.endDate}
              </Typography>
            </div>

            <Box sx={{ width: '100%', height: 300 }}>
              <LineChart
                series={[
                  { data: uData, yAxisId: 'leftAxisId' },
                ]}
                xAxis={[{ scaleType: 'point', data: xLabels }]}
                yAxis={[
                  { id: 'leftAxisId', width: 50 },
                  { id: 'rightAxisId', position: 'right' },
                ]}
              />
            </Box>

            <DropdownToggleButton 
              label="Order Book" 
              color="primary.main"
            >
              <p>Dropdown content.</p>
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </ul>
            </DropdownToggleButton>
            <br/>
            <DropdownToggleButton 
                label="Order Book" 
                color="primary.main"
            >
              <p>dropdown content.</p>
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </ul>
            </DropdownToggleButton>
          </Box>
          
        </Container>
      </Box>
    </Container>
  );
}
