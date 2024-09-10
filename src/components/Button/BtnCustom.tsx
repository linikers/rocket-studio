import { Button } from "@mui/material";
import Link from "next/link";

interface IBtn {
    href: string;
    label: string;
    variant: 'text';
    color: 'primary';
}
export const BtnCustom = ({ href, label, variant, color }: IBtn) => {

    return (
        <Link href={href} passHref legacyBehavior>
            <Button variant={variant} color={color}>
                {label}
            </Button>
        </Link>
    )
}