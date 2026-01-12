import React from "react";
import { TableFooter, TableRow, TableCell, Button, Table } from "@mui/material";
import XIcon from "@mui/icons-material/X";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import { FaDiscord, FaTiktok } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  const links = [
    { label: "Adventure One QSS Inc. © 2025", url: "/" },
    { label: "Privacy", url: "/privacy" },
    { label: "Terms of Use", url: "/terms" },
    { label: "Learn", url: "/learn" },
    { label: "Careers", url: "/careers" },
    { label: "Press", url: "/press" },
  ];

  return (
    <Table className="footer-table">
      <TableFooter>
        <TableRow>
          {links.map((link, index) => (
            <TableCell key={index} className="footer-cell">
              <Button
                className="footer-button"
                variant="text"
                component="a"
                href={link.url}
              >
                {link.label}
              </Button>
            </TableCell>
          ))}

          <TableCell className="footer-icons">
            <Button
              component="a"
              href="mailto:hello@polymarket.com"
              sx={{ minWidth: 0, padding: 0, marginRight: 1 }}
            >
              <EmailOutlinedIcon />
            </Button>
            <Button
              component="a"
              href="https://x.com/Polymarket"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ minWidth: 0, padding: 0, marginRight: 1 }}
            >
              <XIcon />
            </Button>
            <Button
              component="a"
              href="https://www.instagram.com/polymarket/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ minWidth: 0, padding: 0, marginRight: 1 }}
            >
              <InstagramIcon />
            </Button>
            <Button
              component="a"
              href="https://discord.com/invite/Polymarket"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ minWidth: 0, padding: 0, marginRight: 1 }}
            >
              <FaDiscord />
            </Button>
            <Button
              component="a"
              href="https://www.tiktok.com/@polymarket"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ minWidth: 0, padding: 0 }}
            >
              <FaTiktok />
            </Button>
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default Footer;
