import "./MenuTop2.css";
import { Tabs, Tab, Box, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import TuneIcon from '@mui/icons-material/Tune';
import { useState } from "react";

export default function MenuTop2() {
    const tabs = [
        "All",
        "Trump",
        "Iran",
        "NFL Playoffs",
        "Greenland",
        "Cellular Outage",
        "Tariffs",
        "Portugal Election",
        "Fed",
        "Derivatives",
        "Venezuela",
        "Ukraine",
        "Oscars",
        "Epstein",
        "Tweet Markets",
        "Minnesota Unrest",
        "China",
        "AI",
        "Weather",
        "Silver",
        "Equities",
        "Primaries",
        "Movies",
        "Global elections",
    ];

    const [value, setValue] = useState(0);

    return (
        <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
            <Tabs
                value={value}
                onChange={(e, newValue) => setValue(newValue)}
                variant="scrollable"
                scrollButtons="auto"
                className="MenuTop2"
                sx={{
                    flex: 1,
                    minWidth: 0, // ✅ IMPORTANT: prevents left clipping in flex layouts
                }}
            >
                {tabs.map((label) => (
                    <Tab key={label} label={label} />
                ))}
            </Tabs>

            <IconButton className="iconMenuTop2" id="SearchIcon" aria-label="Search">
                <SearchIcon />
            </IconButton>
            <IconButton className="iconMenuTop2" id="TuneIcon" aria-label="Search">
                <TuneIcon />
            </IconButton>
            <IconButton className="iconMenuTop2" id="BookmarkBorderIcon" aria-label="Search">
                <BookmarkBorderIcon />
            </IconButton>

        </Box>
    );
}
