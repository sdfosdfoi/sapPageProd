import React from "react";
import ShieldIcon from "@mui/icons-material/Shield";
import StatsCard from "../components/StatsCard";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import DataTable from "../components/DataTable";

const events = [
  [701, "Блокировка IP", "2025-06-01 17:21", "сработал антифрод"],
  [702, "MCC violation", "2025-06-02 11:48", "flag"],
  [703, "Suspicious region", "2025-06-02 12:24", "flag"],
];

export default function FraudMonitor() {
  return (
    <Box>
      <Typography variant="h4" color="primary" mb={2} fontWeight="bold">
        <ShieldIcon fontSize="large" sx={{ verticalAlign: "bottom", mr: 1, color: "#FF935B" }} />
        Мониторинг антифрода / 3DS
      </Typography>
      <Box display="flex" gap={2} mb={2}>
        <StatsCard title="Отклонено по гео" value="12" statusColor="#FF935B" />
        <StatsCard title="Отклонено по 3DS" value="5" statusColor="#2233EE" />
        <StatsCard title="Блокировки IP" value="8" statusColor="#FF935B" />
      </Box>
      <Card sx={{ mt: 1, mb: 4, bgcolor: "#fff" }}>
        <CardContent>
          <Typography fontWeight={600} fontSize={16} color="primary">
            Последние фрод-инциденты
          </Typography>
          <DataTable
            columns={["ID", "Событие", "Время", "Детали"]}
            data={events}
          />
        </CardContent>
      </Card>
    </Box>
  );
}

