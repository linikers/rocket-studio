import { Box } from "@mui/material"
import logo from "../../../public/images/logo.png"
import Image from "next/image";
const Logo = () => {

    return (
        <Box
            sx={{
                display: 'flex',
                alignContent: 'center',
                alignItems: 'center',
            }}
        >
            <Image
                alt={'rocket'}
                src={logo}
                quality={100}
                width={45}
                height={45}
                // layout="responsive"
                translate={"yes"}
            />
        </Box>
    )
}
export default Logo;