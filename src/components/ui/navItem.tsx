import Link from "next/link";
import { NavigationMenuItem, NavigationMenuLink } from "./navigation-menu";

export default function NavItem({itemName, path}: {itemName: string, path: string}) {
    return (
        <NavigationMenuItem className="px-1">
            <Link href={path} legacyBehavior passHref>
                <NavigationMenuLink>{itemName}</NavigationMenuLink>
            </Link>
        </NavigationMenuItem>
    );
}
