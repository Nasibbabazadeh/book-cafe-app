import { FOOTER_NAVBAR } from "@/lib/constants";

export default function FooterNavbar() {
    return (
        <nav about="footer-navbar">
            <ul>
                {
                    FOOTER_NAVBAR.map((navItem) => (
                        <li>{navItem.label}</li>
                    ))
                }
            </ul>
        </nav>
    )
}