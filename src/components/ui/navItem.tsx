import Link from "next/link";
import { NavigationMenuItem, NavigationMenuLink } from "./navigation-menu";

export default function NavItem({itemName, path}: {itemName: string, path: string}) {
    return (
        <NavigationMenuItem className="px-1 text-slate-50 text-xl">
            <Link href={path} legacyBehavior passHref>
                <NavigationMenuLink>{itemName}</NavigationMenuLink>
            </Link>
        </NavigationMenuItem>
    );
}
