import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const pages = [
  { to: "/", label: "Главная" },
  { to: "/admin", label: "Админка" },
  { to: "/merchant", label: "Мерчант" },
  { to: "/fraud", label: "Антифрод" },
  { to: "/routing", label: "Маршрутизация" },
  { to: "/security", label: "Безопасность" },
  { to: "/integration", label: "Интеграции" },
  { to: "/payouts", label: "Выплаты" },
  { to: "/reports-extended", label: "Отчёты" },
  { to: "/audit", label: "Аудит" },
  { to: "/webhooks", label: "Webhooks" },
  { to: "/kyc", label: "KYC/AML" },
  { to: "/docs", label: "API Docs" },
];

export default function Header() {
  return (
    <AppBar position="static" color="primary" elevation={2}>
      <Toolbar
        sx={{ display: "flex", justifyContent: "space-between", px: 3 }}>
        <Typography variant="h6" fontWeight={700} letterSpacing={1}>
          SaaS Processing Center
        </Typography>
        <Box>
          {pages.map((p) => (
            <Button
              key={p.to}
              color="inherit"
              size="large"
              component={Link}
              to={p.to}
              sx={{ fontWeight: 500, textTransform: "none", ml: 1.5 }}
            >
              {p.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

