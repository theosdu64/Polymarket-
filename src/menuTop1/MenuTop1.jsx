import './MenuTop1.css'
import {Tabs, Tab, Badge} from '@mui/material';
import Box from "@mui/material/Box";
export default function MenuTop1({ onChangeCategory }) {
    return (
        <Tabs className="MenuTop1"

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
            <Tab label="All" onClick={() => onChangeCategory("All")} />
            <Tab id="new" label="New"  onClick={() => onChangeCategory("New")}/>
            <Tab label="Politics" onClick={() => onChangeCategory("Politics")}/>
            <Tab label="Sports" onClick={() => onChangeCategory("Sports")}/>
            <Tab label="Crypto" onClick={() => onChangeCategory("Crypto")}/>
            <Tab label="Finance" onClick={() => onChangeCategory("Finance")}/>
            <Tab label="Geopolitics" onClick={() => onChangeCategory("Geopolitics")}/>
            <Tab label="Earnings" onClick={() => onChangeCategory("Earnings")}/>
            <Tab label="Tech" onClick={() => onChangeCategory("Tech")}/>
            <Tab label="Culture" onClick={() => onChangeCategory("Culture")}/>
            <Tab label="World" onClick={() => onChangeCategory("World")}/>
            <Tab label="Economy" onClick={() => onChangeCategory("Economy")}/>
            <Tab label="Climate & Science" onClick={() => onChangeCategory("Climate & Science")} />
            <Tab label="Elections" onClick={() => onChangeCategory("Elections")}/>
            <Tab label="Mentions" onClick={() => onChangeCategory("Mentions")}/>
        </Tabs>
    )
}