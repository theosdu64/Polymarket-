import './MenuTop1.css'
import {Tabs, Tab, Badge} from '@mui/material';
import Box from "@mui/material/Box";
export default function MenuTop1() {
    return (
        <Tabs

            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
        >
            <Tab
                label={
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <svg
                            height="20"
                            width="20"
                            viewBox="0 0 18 18"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            focusable="false"
                        >
                            <g fill="currentColor">
                                <path
                                    d="M1.75,12.25l3.646-3.646c.195-.195,.512-.195,.707,0l3.293,3.293c.195,.195,.512-.195,.707,0l6.146-6.146"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                />
                                <polyline
                                    fill="none"
                                    points="11.25 5.75 16.25 5.75 16.25 10.75"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                />
                            </g>
                        </svg>
                        Trending
                    </Box>
                }
            />

            <Tab label="Breaking" />
            <Tab label="New" />
            <Tab label="Politics" />
            <Tab label="Sports" />
            <Tab label="Crypto" />
            <Tab label="Finance" />
            <Tab label="Geopolitics" />
            <Tab label="Earnings" />
            <Tab label="Tech" />
            <Tab label="Culture" />
            <Tab label="World" />
            <Tab label="Economy" />
            <Tab label="Climate & Science" />
            <Tab label="Elections" />
            <Tab label="Mentions" />
        </Tabs>
    )
}