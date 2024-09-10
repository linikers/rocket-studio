import { Facebook, Instagram, Pinterest } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import Link from "next/link";

const Footer = () => {
  return (
    <Box sx={{ padding: "1rem", backgroundColor: "#f5f5f5", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
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
