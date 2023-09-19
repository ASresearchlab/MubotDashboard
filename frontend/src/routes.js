import React from "react";

import { Icon }  from "@chakra-ui/react";
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
  MdOutlineForum,
  MdIntegrationInstructions,
  MdBuildCircle,
  MdFilterAlt,
  MdNotificationsNone,
  MdSettings,
  MdContactSupport
} from "react-icons/md";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/dataTables";
import RTL from "views/admin/rtl";


// Auth Imports
import SignInCentered from "views/auth/signIn";
import { Avatar } from "@chakra-ui/react";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width='30px' height='30px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "Small Talk",
    layout: "/admin",
    path: "/nft-marketplace",
    icon: (
      <Icon
        as={MdOutlineForum}
        width='30px'
        height='30px'
        color='inherit'
      />
    ),
    component: NFTMarketplace,
    secondary: true,
  },
  {
    name: "AI Training",
    layout: "/admin",
    icon: <Icon as={MdBuildCircle} width='30px' height='30px' color='inherit' />,
    path: "/data-tables",
    component: DataTables,
  },
  {
    name: "Integrations",
    layout: "/admin",
    path: "/profile",
    icon: <Icon as={MdIntegrationInstructions} width='30px' height='30px' color='inherit' />,
    component: Profile,
  },
  {
    name: "Analytics",
    layout: "/admin",
    path: "/profile",
    icon: <Icon as={MdFilterAlt} width='30px' height='30px' color='inherit' />,
    component: Profile,
  },
  {
    name: "RTL Admin",
    layout: "/rtl",
    path: "/rtl-default",
    icon: <Icon as={MdSettings} width='30px' height='30px' color='inherit' marginTop={300} />,
    component: RTL,
  },
  {
    name: "RTL Admin",
    layout: "/rtl",
    path: "/rtl-default",
    icon: <Icon as={MdNotificationsNone} width='30px' height='30px' color='inherit' />,
    component: RTL,
  },
  {
    name: "RTL Admin",
    layout: "/rtl",
    path: "/rtl-default",
    icon: <Icon as={MdContactSupport} width='30px' height='30px' color='inherit' />,
    component: RTL,
  },
];

export default routes;

