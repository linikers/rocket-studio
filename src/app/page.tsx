import { Facebook, Instagram, Pinterest } from "@mui/icons-material";
import { Box, Grid2, IconButton, Typography } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <Box>
      <Grid2>
        <Typography>Rocket Studio</Typography>
      </Grid2>
      <Grid2>
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
        <Typography>Desenvolvido por: <Link href="/" >LinikerS</Link> </Typography>
      </Grid2>
    </Box>
    );
}
