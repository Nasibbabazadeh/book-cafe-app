import { ROUTES } from "@/lib/constants";
import { Link } from "@tanstack/react-router";
import HeaderNavbar from "./navbar";

export default function Header() {
    return (
        <header>
            <Link to={ROUTES.HOME}>
                <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
            </Link>

            <HeaderNavbar />
        </header>
    )
}