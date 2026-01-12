import React from "react";
import { TableFooter, TableRow, TableCell, Button, Table } from "@mui/material";
import XIcon from '@mui/icons-material/X';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import './footer.css'; 

const Footer = () => {
    const links = ["Adventure One QSS Inc. © 2025","Privacy", "Terms of Use", "Learn", "Careers", "Press"];

    return (
        <Table className="footer-table">
            <TableFooter>
                <TableRow>
                    {links.map((label, index) => (
                        <TableCell key={index} className="footer-cell">
                            <Button className="footer-button" variant="text">
                                {label}
                            </Button>
                        </TableCell>
                    ))}
                    
                    <TableCell className="footer-icons">
                        <EmailOutlinedIcon />
                        <XIcon />
                        <InstagramIcon />
                    </TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    );
};

export default Footer;
