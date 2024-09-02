import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from "@mui/icons-material/BarChart";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Dashboard from "../components/Dashboard";
import { App as ChatApp } from "../whatsappchat/Components/App";
import { MyComponent } from "../docmapper/index";
import { Chat, DocumentScanner } from "@mui/icons-material";
import { DocumentMapper as DocMapper } from "il-doc-mapper";

export const MENU_ITEMS = [
  {
    name: "Dashboard",
    icon: <DashboardIcon />,
    path: "/dashboard",
    component: <Dashboard />,
  },
  {
    name: "Reports",
    icon: <BarChartIcon />,
    path: "/reports",
    component: <h1>hello world 1</h1>,
  },
  {
    name: "Get Started",
    icon: <AssignmentIcon />,
    path: "/get_started",
    component: <h1>hello world 11111</h1>,
  },
  {
    name: "Chat app",
    icon: <Chat />,
    path: "/chat",
    component: <ChatApp />,
  },
  {
    name: "Document Mapper",
    icon: <DocumentScanner />,
    path: "/document-mapper",
    component: <MyComponent />,
  },
  // {
  //   name: "Document Mapper2",
  //   icon: <DocumentScanner />,
  //   path: "/document-mapper2",
  //   component: <DocMapper />,
  // },
];
