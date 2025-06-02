import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import { Link, useLocation } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import DescriptionIcon from "@mui/icons-material/Description";

const items = [
  { to: "/admin", label: "Администратор", icon: <DashboardIcon /> },
  { to: "/merchant", label: "Мерчант", icon: <PersonIcon /> },
  { to: "/fraud", label: "Антифрод", icon: <ShieldIcon /> },
  { to: "/routing", label: "Маршрутизация", icon: <CallSplitIcon /> },
  { to: "/security", label: "Безопасность", icon: <SecurityIcon /> },
  { to: "/integration", label: "Интеграции", icon: <IntegrationInstructionsIcon /> },
  { to: "/payouts", label: "Выплаты", icon: <PaidIcon /> },
  { to: "/reports-extended", label: "Отчёты", icon: <ReceiptLongIcon /> },
  { to: "/audit", label: "Аудит", icon: <FactCheckIcon /> },
  { to: "/webhooks", label: "Webhooks", icon: <HttpIcon /> },
  { to: "/kyc", label: "KYC/AML", icon: <VerifiedUserIcon /> },
  { to: "/docs", label: "API Docs", icon: <DescriptionIcon /> },
];
import ShieldIcon from "@mui/icons-material/Shield";
import CallSplitIcon from "@mui/icons-material/CallSplit";
import SecurityIcon from "@mui/icons-material/Security";
import PaidIcon from "@mui/icons-material/Paid";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import HttpIcon from "@mui/icons-material/Http";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

export default function Sidebar() {
  const location = useLocation();
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 220,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: 220,
          boxSizing: "border-box",
          bgcolor: "#F6F8FB"
        },
      }}
    >
      <ToolbarSpacer />
      <List>
        {items.map(({ to, label, icon }) => (
          <ListItemButton
            key={to}
            component={Link}
            to={to}
            selected={location.pathname === to}
            sx={{ borderRadius: "8px", my: 0.5 }}
          >
            <ListItemIcon sx={{ color: "#2233EE" }}>{icon}</ListItemIcon>
            <ListItemText
              primary={label}
              primaryTypographyProps={{
                fontWeight: location.pathname === to ? 700 : 500,
                color: "#23272F"
              }}
            />
          </ListItemButton>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
}

function ToolbarSpacer() {
  return <div style={{ minHeight: 64 }} />; // AppBar height
}

