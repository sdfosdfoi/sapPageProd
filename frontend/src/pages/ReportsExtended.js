import React from "react";
import AssessmentIcon from "@mui/icons-material/Assessment";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import DataTable from "../components/DataTable";
import Button from "@mui/material/Button";

const tableRows = [
  ["2025-06-03", "3,480", "1 700 000₽", "2 500₽"],
  ["2025-06-02", "3,501", "1 820 000₽", "2 690₽"],
  ["2025-06-01", "4,008", "1 920 000₽", "2 810₽"],
];

export default function ReportsExtended() {
  return (
    <Box>
      <Typography variant="h4" color="primary" mb={2} fontWeight="bold">
        <AssessmentIcon sx={{ verticalAlign: "middle", mr: 1, color: "#2233EE" }} />
        Отчёты/Статистика/Выгрузка
      </Typography>
      <Card sx={{ bgcolor: "#fff" }}>
        <CardContent>
          <Typography fontWeight={600} fontSize={16} color="primary">
            Обобщённая статистика
          </Typography>
          <DataTable
            columns={["Дата", "Транзакций", "Оборот", "Комиссия"]}
            data={tableRows}
          />
          <Button variant="outlined" color="primary" sx={{ mt: 2 }}>
            Экспортировать CSV
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}

