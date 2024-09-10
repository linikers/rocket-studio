import { Facebook, Instagram, Pinterest } from "@mui/icons-material";
import { Box, Button, Grid2, IconButton, Typography } from "@mui/material";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Rocket Studio Tattoo</title>
      </Head>
      <Grid2>
        <Typography>Rocket Studio</Typography>
      </Grid2>
      <Box>
        <Button>Home</Button>
        <Button>Portfolio</Button>
        <Button>Contato</Button>
        <Link href="/">Home</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/contato">Contato</Link>
      </Box>
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
