import { HEADER_NAVBAR } from "@/lib/constants";
import { Link } from "@tanstack/react-router";

export default function HeaderNavbar() {
    return (
        <nav about="header-navbar">
            <ul>
                {
                    HEADER_NAVBAR.map((navItem) => (
                        <li>
                            <Link to={navItem.href}>{navItem.label}</Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}