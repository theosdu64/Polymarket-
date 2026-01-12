import React from "react";
import { TableFooter, TableRow, TableCell, Button, Table } from "@mui/material";
import XIcon from '@mui/icons-material/X';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    const links = ["Adventure One QSS Inc. © 2025","Privacy", "Terms of Use", "Learn", "Careers", "Press"];

    return (
        <Table sx={{ width: "100%", backgroundColor: "#0b0e14", borderTop: "1px solid #1f2937" }}>
            <TableFooter>
                <TableRow>
                    {links.map((label, index) => (
                        <TableCell
                            key={index}
                            align="center"
                            sx={{
                                color: "#9ca3af",
                                borderBottom: "none",
                                py: 1,
                            }}
                        >

                            <Button
                                variant="text"
                                sx={{
                                    color: "#9ca3af",
                                    textTransform: "none",
                                    fontSize: "0.875rem",
                                    "&:hover": {
                                        color: "#ffffff",
                                        backgroundColor: "transparent",
                                    },
                                }}
                            >
                                {label}
                            </Button>
                        </TableCell>
                    ))}
                    
                    <TableCell align="right" sx={{ borderBottom: "none", py: 1 }}>
                        <EmailOutlinedIcon sx={{ color: "#9ca3af", cursor: "pointer", "&:hover": { color: "#ffffff" } }} />
                        <XIcon sx={{ color: "#9ca3af", cursor: "pointer", "&:hover": { color: "#ffffff" } }} />
                        <InstagramIcon sx={{ color: "#9ca3af", cursor: "pointer", "&:hover": { color: "#ffffff" } }} />
                    </TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    );
};

export default Footer;
