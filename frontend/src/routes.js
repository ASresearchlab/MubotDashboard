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
import HelpCenter from "views/admin/help_center";
import Profile from "views/admin/profile";
import DataTables from "views/admin/dataTables";
import RTL from "views/admin/rtl";
import Sizedbox from 'components/Sizedbox';

// Auth Imports
import SignInCentered from "views/auth/signIn";
import { Avatar } from "@chakra-ui/react";

const routes = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width='30px' height='30px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "Small Talk",
    layout: "/admin",
    path: "/small-talk",
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
    path: "/ai-training",
    // component: DataTables,
  },
  {
    name: "Integrations",
    layout: "/admin",
    path: "/integrations",
    icon: <Icon as={MdIntegrationInstructions} width='30px' height='30px' color='inherit' />,
    // component: Profile,
  },
  {
    name: "Analytics",
    layout: "/admin",
    path: "/analytics",
    icon: <Icon as={MdFilterAlt} width='30px' height='30px' color='inherit' />,
    // component: Profile,
  },
  {
    name: "",
    layout: "2",
    path: "",
    
  },
  {
    name: "Notifications",
    layout: "/admin",
    path: "/notifications",
    icon: <Icon as={MdNotificationsNone} width='30px' height='30px' color='inherit' /*marginTop={300}*/ />,
    // component: RTL,
  },
  {
    name: "Settings",
    layout: "/admin",
    path: "/settings",
    icon: <Icon as={MdSettings} width='30px' height='30px' color='inherit' />,
    // component: RTL,
  },
  {
    name: "Help Center",
    layout: "/admin",
    path: "/help_center",
    icon: <Icon as={MdContactSupport} width='30px' height='30px' color='inherit' />,
    component: HelpCenter,
  },
];

export default routes;

