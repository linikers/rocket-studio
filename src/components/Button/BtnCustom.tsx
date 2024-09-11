import { Button } from "@mui/material";
import Link from "next/link";

interface IBtn {
    href: string;
    label: string;
    variant: 'text' | 'contained'| 'outlined';
    color: 'primary' | 'secondary' | 'info';
    marginRight?: string | number;
}
export const BtnCustom = ({ href, label, variant, color, marginRight }: IBtn) => {

    return (
        <Link href={href} passHref legacyBehavior>
            <Button variant={variant} color={color}  sx={{ marginRight }}>
                {label}
            </Button>
        </Link>
    )
}