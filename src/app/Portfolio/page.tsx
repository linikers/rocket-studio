import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

interface IPinterestPin {
    id: string;
    images: {
        [key: string]: {
            url: string;
        };
    };
    note: string;
}
export default function Home() {
    // const [pins, setPins] = useState<IPinterestPin[]>([]);

    // useEffect(() => {
    //     async function fetchPinterestPins() {
    //       try {
    //         const response = await axios.get(`https://api.pinterest.com/v5/boards/${BOARD_ID}/pins`, {
    //           headers: {
    //             Authorization: `Bearer ${PINTEREST_ACCESS_TOKEN}`
    //           }
    //         });
    //         setPins(response.data.data);
    //       } catch (error) {
    //         console.error('Erro ao buscar pins do Pinterest', error);
    //       }
    //     }
        
    //     fetchPinterestPins();
    //   }, []);

    return (
        <Box>
            <Typography>Portfolio</Typography>
        </Box>
    )
}