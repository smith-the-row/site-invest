import {
  MdEvent,
  MdAnalytics,
  MdAnnouncement,
  MdAccountBalance,
  MdDashboardCustomize,
  MdDataExploration,
  MdCallMade,
} from "react-icons/md";

export const links = [
  {
    text: "Dashboard",
    path: "/dashboard",
    icon: <MdDashboardCustomize />,
  },
  {
    text: "Market",
    path: "/market",
    icon: <MdAnnouncement />,
  },
  {
    text: "Analytics",
    path: "/analytics",
    icon: <MdAnalytics />,
  },
  {
    text: "Fund Account",
    path: "/deposit",
    icon: <MdAccountBalance />,
  },
  {
    text: "Trading Signal",
    path: "/signal",
    icon: <MdDataExploration />,
  },
  {
    text: "NFT marketplace",
    path: "/news",
    icon: <MdEvent />,
  },
  {
    text: "Level Upgrade",
    path: "/level",
    icon: <MdCallMade />,
  },
];
