import React from "react";
import HttpIcon from "@mui/icons-material/Http";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import DataTable from "../components/DataTable";
import Button from "@mui/material/Button";

const webhookData = [
  [1, "Успех платежа", "/webhook/payment", "last_result: success"],
  [2, "Возврат", "/webhook/refund", "last_result: ok"],
];

export default function Webhooks() {
  return (
    <Box>
      <Typography variant="h4" color="primary" mb={2} fontWeight="bold">
        <HttpIcon sx={{ verticalAlign: "middle", mr: 1, color: "#2233EE" }} />
        Webhooks и автоинвойсы
      </Typography>
      <Card sx={{ bgcolor: "#fff" }}>
        <CardContent>
          <Typography fontWeight={600} color="primary">
            Примеры настроек Webhook
          </Typography>
          <DataTable
            columns={["#", "Событие", "URL endpoint", "Последний результат"]}
            data={webhookData}
          />
          <Button variant="outlined" color="primary" sx={{ mt: 2 }}>
            Отправить тестовый webhook
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}

