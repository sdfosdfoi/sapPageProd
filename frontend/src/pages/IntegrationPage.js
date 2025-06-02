import React from "react";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";

const EXAMPLES = [
  { label: "REST API JWT", snippet: `POST /api/payments\nAuthorization: Bearer <jwt>\nContent-Type: application/json\n{\n  "amount": 1100,\n  "currency": "RUB"\n}` },
  { label: "H2H Протокол (JSON)", snippet: `<xml>\n  <amount>1100</amount>\n  <pan>400000******1234</pan>\n</xml>` },
  { label: "Webhooks", snippet: `POST /webhook/payment\n{\n  "status": "success", "amount": 1100\n}` }
];

export default function IntegrationPage() {
  const [tab, setTab] = React.useState(0);
  return (
    <Box>
      <Typography variant="h4" color="primary" mb={2} fontWeight="bold">
        <IntegrationInstructionsIcon sx={{ verticalAlign: "middle", mr: 1, color: "#24D2A2" }} />
        Интеграция/API/Выплаты
      </Typography>
      <Tabs value={tab} onChange={(_, t) => setTab(t)} sx={{ mb: 2 }}>
        <Tab label="API/JWT" />
        <Tab label="H2H/Банки/Крипто" />
        <Tab label="Webhooks/Автоинвойс" />
      </Tabs>
      <Card sx={{ bgcolor: "#fff", mb: 2 }}>
        <CardContent>
          <Typography fontWeight={600} color="primary" mb={1}>
            Пример {EXAMPLES[tab].label} запроса
          </Typography>
          <pre style={{ background: "#F6F8FB", borderRadius: 8, padding: 12 }}>{EXAMPLES[tab].snippet}</pre>
        </CardContent>
      </Card>
      <Divider sx={{ my: 2 }} />
      <Typography color="primary" fontWeight={600}>Инструкции и документация есть в разделе "API Docs" (Swagger UI)</Typography>
    </Box>
  );
}

