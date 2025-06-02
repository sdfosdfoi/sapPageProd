import React from "react";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import DataTable from "../components/DataTable";

const auditLogs = [
  [1001, "Изменён лимит", "admin", "2025-05-31 11:21", "ok"],
  [1002, "Выплачено", "merchant", "2025-06-01 19:31", "ok"],
  [1003, "Ротация ключа", "sys", "2025-06-02 15:20", "ok"],
];
export default function Audit() {
  return (
    <Box>
      <Typography variant="h4" color="primary" mb={2} fontWeight="bold">
        <FactCheckIcon sx={{ verticalAlign: "middle", mr: 1, color: "#2233EE" }} />
        Аудит / Логирование событий
      </Typography>
      <Card sx={{ bgcolor: "#fff" }}>
        <CardContent>
          <Typography fontWeight={600} fontSize={16} color="primary">
            Недавние операции
          </Typography>
          <DataTable
            columns={["ID", "Операция", "Кем", "Время", "Статус"]}
            data={auditLogs}
          />
        </CardContent>
      </Card>
    </Box>
  );
}

