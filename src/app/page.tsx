import { Box,Typography } from "@mui/material";
import rocket from "../../public/images/rocketStdio.png.png"
import Image from "next/image";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h3" gutterBottom>
        Rocket Studio 
      </Typography>
      <Image
        alt={"logo"}
         src={rocket}
        width={800}
        height={800}
        priority     
      />
    </Box>
    );
}
