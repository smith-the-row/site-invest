import {
  MdEvent,
  MdAnalytics,
  MdAnnouncement,
  MdAccountBalance,
  MdDashboardCustomize,
  MdDataExploration,
  MdCallMade,
} from "react-icons/md";
import { FaBriefcase, FaRegHandshake } from "react-icons/fa";

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
    text: "Investment",
    path: "/invest",
    icon: <FaBriefcase />,
  },
  {
    text: "Level Upgrade",
    path: "/level",
    icon: <MdCallMade />,
  },
  {
    text: "Refer",
    path: "/refer",
    icon: <FaRegHandshake />,
  },
];
