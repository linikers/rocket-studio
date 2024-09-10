import { Facebook, Instagram, Pinterest } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import Link from "next/link";

const Footer = () => {
  return (
    <Box 
      sx={{
        backgroundColor: "primary", 
        padding: "1rem", 
        display: "flex", 
        flexDirection: "column",
        justifyContent: "space-between", 
        alignItems: "center",
        width: "70vw",
        maxWidth: "100%",
        margin: "0 auto",
      }}
    >
      <Box>
        <IconButton href="https://pinterest.com" target="_blank" aria-label="Pinterest">
          <Pinterest />
        </IconButton>
        <IconButton href="https://instagram.com" target="_blank" aria-label="Instagram">
          <Instagram />
        </IconButton>
        <IconButton href="https://facebook.com" target="_blank" aria-label="Facebook">
          <Facebook />
        </IconButton>
      </Box>
      <Typography variant="body2">
        Desenvolvido por: <Link href="/" passHref>LinikerS</Link>
      </Typography>
    </Box>
  );
};

export default Footer;
