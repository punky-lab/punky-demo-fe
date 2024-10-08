import { DynamicWidget } from "@dynamic-labs/sdk-react-core";
import { Link } from "@nextui-org/react";
import Image from "next/image";
import PunkyLogo from "../assets/logo.png";

// In dashboard, displaying a 'whitepaper' link.
// In game, displaying 'marketplace', 'ranking' etc.
type LinkOptions = "dashboard" | "game";

interface LinkInfo {
  text: string;
  href: string;
}

const linkMap = new Map<LinkOptions, LinkInfo[]>([
  ["dashboard", [{ text: "Whitepaper", href: "#" }]],
  [
    "game",
    [
      { text: "Home", href: "/home" },
      { text: "Marketplace", href: "/marketplace" },
      { text: "Ranking", href: "/ranking" },
    ],
  ],
]);

interface AppHeaderProps {
  link?: LinkOptions;
}

export default function AppHeader(props: AppHeaderProps) {
  const linkList = linkMap.get(props.link || "dashboard") || [];
  return (
    <div className="w-full h-20 px-8 border-b-1 border-b-white flex flex-row items-center">
      <div>
        <Image src={PunkyLogo.src} alt="/logo.png" width={48} height={48} />
      </div>
      <div className="ml-8">
        {linkList.map((item, i) => {
          return (
            <Link
              className="mx-8"
              color="foreground"
              underline="hover"
              key={i}
              href={item.href}
            >
              {item.text}
            </Link>
          );
        })}
      </div>
      <div className="ml-auto">
        <DynamicWidget />
      </div>
    </div>
  );
}
