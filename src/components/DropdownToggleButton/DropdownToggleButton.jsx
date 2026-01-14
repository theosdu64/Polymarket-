import { Button, Box, Collapse } from "@mui/material";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from "react";

export default function DropdownToggleButton({
  label = "",
  color = "primary",
  children,           // dropdown content
  expandedProp,
  onToggle,
}) {
  const [expanded, setExpanded] = useState(false);
  const isControlled = expandedProp !== undefined;
  const isExpanded = isControlled ? expandedProp : expanded;

  const handleClick = () => {
    if (!isControlled) setExpanded(prev => !prev);
    if (onToggle) onToggle(!isExpanded);
  };

  return (
    <Box width="100%">
      {/* button */}
      <Button
        onClick={handleClick}
        aria-label="Toggle section"
        aria-expanded={isExpanded}
        variant="contained"
        color={color}
        sx={{
          width: "100%",
          p: 2,
          justifyContent: "space-between",
          textAlign: "left",
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            backgroundColor: `${color}.light`,
          },
          borderRadius: 1,
          boxShadow: 2,
          border: "1px solid",
          borderColor: "#aaaaaa"
        }}
      >
        {/* Label */}
        <Box sx={{ flexGrow: 1 }}>{label}</Box>

        {/* Chevron */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            transition: "transform 0.3s ease",
            transform: isExpanded ? "rotate(0deg)" : "rotate(180deg)",
          }}
        >
          <KeyboardArrowUpIcon />
        </Box>
      </Button>

      {/* dropdown content */}
      <Collapse in={isExpanded} timeout="auto" unmountOnExit>
        <Box
          sx={{
            mt: 0,
            p: 2,
            backgroundColor: color,
            borderRadius: 1,
            boxShadow: 2,
            border: "1px solid",
            borderColor: "#aaaaaa"
          }}
        >
          {children}
        </Box>
      </Collapse>
    </Box>
  );
}
