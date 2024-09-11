import { Box, Button, Grid2, Typography } from "@mui/material";
import Link from "next/link";
import Logo from "../Logo/Logo";
import { BtnCustom } from "../Button/BtnCustom";

const Header = () => {
  return (
    <Box 
      sx={{
        padding: "1rem", 
        backgroundColor: "primary.light", 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center",
        width: "98vw",
        maxWidth: "100%",
        margin: "0 auto",
        textAlign: {
          xs: 'center',  // Centraliza o texto em telas pequenas
          sm: 'left',    // Alinha à esquerda em telas maiores
        },
      }}
    >
      <Grid2
        display='flex'
        flexDirection='row'
        alignItems='center'
        justifyContent='space-between'
      >
        <Logo />
        <Typography variant="h6">Rocket Studio</Typography>
      </Grid2>
      <Box>
        <BtnCustom 
          href="/"
          label="Home"
          variant="contained"
          color="secondary"
          marginRight="4px"
        />
        <BtnCustom 
          href="/portfolio"
          label="Portfolio"
          variant="contained"
          color="secondary"
          marginRight="4px"
        />
        <BtnCustom 
          href="/contato"
          label="Contato"
          variant="contained"
          color="secondary"
        />
      </Box>
    </Box>
  );
};

export default Header;
