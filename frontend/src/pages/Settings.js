import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function Settings() {
  return (
    <Box>
      <Typography variant="h4" color="primary" mb={2} fontWeight="bold">
        <SettingsIcon sx={{ verticalAlign: "middle", mr: 1, color: "#FF935B" }} />
        Настройки и политика доступа
      </Typography>
      <Card sx={{ bgcolor: "#fff" }}>
        <CardContent>
          <Typography fontWeight={600} color="primary">
            Настройки white-label, лимиты, параметры интеграции.
          </Typography>
          <ul>
            <li>Ротация ключей доступа</li>
            <li>Управление лимитами / доступами</li>
            <li>Безопасный режим</li>
          </ul>
        </CardContent>
      </Card>
    </Box>
  );
}

