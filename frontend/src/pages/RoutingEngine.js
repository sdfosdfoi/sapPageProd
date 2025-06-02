import React from "react";
import CallSplitIcon from "@mui/icons-material/CallSplit";
import StatsCard from "../components/StatsCard";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import DataTable from "../components/DataTable";

const events = [
  [101, "Банк 1", "RUB", "успех", "fallback"],
  [102, "Банк 2", "USD", "успех", "обычный"],
  [103, "Банк 3", "USDT", "отмена", "fallback"],
];

export default function RoutingEngine() {
  return (
    <Box>
      <Typography variant="h4" color="primary" mb={2} fontWeight="bold">
        <CallSplitIcon fontSize="large" sx={{ verticalAlign: "middle", mr: 1, color: "#24D2A2" }} />
        Смарт маршрутизация платежей
      </Typography>
      <Box display="flex" gap={2} mb={2}>
        <StatsCard title="Банков в пуле" value="5" />
        <StatsCard title="Вызван fallback" value="7" statusColor="#FF935B" />
        <StatsCard title="Выполнено обработок" value="812" />
      </Box>
      <Card sx={{ mt: 1, mb: 4, bgcolor: "#fff" }}>
        <CardContent>
          <Typography fontWeight={600} fontSize={16} color="primary">
            Последние маршруты
          </Typography>
          <DataTable
            columns={["ID", "Банк", "Валюта", "Статус", "Алгоритм"]}
            data={events}
          />
          <Chip label="Fallback активен" color="error" sx={{ mt: 2, fontWeight: 600 }} />
        </CardContent>
      </Card>
    </Box>
  );
}

