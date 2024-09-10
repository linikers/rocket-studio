import { Box, Button, Grid2, Typography } from "@mui/material"

export const Header = () => (
    <Box>
        <Grid2 container alignItems="center">
                <Typography>
                    Rocket Tattoo
                </Typography>

                <Button>Home</Button>
                <Button>Portifolio</Button>
                <Button>Contato</Button>
        </Grid2>
    </Box>
)