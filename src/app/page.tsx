import { Box,Typography } from "@mui/material";
import rocket from "../../public/images/rocketStdio.png.png"
import Image from "next/image";

export default function Home() {
  return (
    <Box
      sx={{
        // marginTop: "3.8rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        padding: "0 1rem",
        textAlign: "center",
      }}
    >
      <Typography 
        variant="h3"
        gutterBottom
        sx={{
          fontSize: {
            xs: "2rem",
            sm: "3rem",
            md: "4rem",
          },
        }}
        
      >
        Rocket Studio 
      </Typography>
      <Image
        alt={"logo"}
         src={rocket}
         quality={100}
         layout="responsive"
        width={800}
        height={800}
        priority
      />
    </Box>
    );
}
