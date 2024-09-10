import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

const Header = () => {
  return (
    <Box sx={{ padding: "1rem", backgroundColor: "#f5f5f5", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <Typography variant="h6">Rocket Studio</Typography>
      <Box>
        {/* Usando Buttons e Links para navegação */}
        <Button component={Link} href="/" sx={{ marginRight: "1rem" }}>
          Home
        </Button>
        <Button component={Link} href="/portfolio" sx={{ marginRight: "1rem" }}>
          Portfolio
        </Button>
        <Button component={Link} href="/contato">
          Contato
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
