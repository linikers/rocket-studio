import { Facebook, Instagram, Pinterest } from "@mui/icons-material"
import { Box, Grid, Grid2, IconButton, Typography } from "@mui/material"

export const Footer = () => (
    <Box>
        <Grid2 container alignItems="center" spacing={1}>
            <Grid2>
                <IconButton href="" target="_blanck" aria-label="Pinterest">
                    <Pinterest />
                </IconButton>
                <IconButton href="" target="_blanck" aria-label="Instagram">
                    <Instagram />
                </IconButton>
                <IconButton href="" target="_blanck" aria-label="Facebook">
                    <Facebook />
                </IconButton>
            </Grid2>
            <Grid2>
                <Typography>
                    Desenvolvido por linikerS - Rocket Tattoo Studio versão 1.0.02
                </Typography>
            </Grid2>
        </Grid2>
    </Box>
)