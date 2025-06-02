import React from "react";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

export default function KycAml() {
  return (
    <Box>
      <Typography variant="h4" color="primary" mb={2} fontWeight="bold">
        <VerifiedUserIcon sx={{ verticalAlign: "middle", mr: 1, color: "#24D2A2" }} />
        KYC / AML (Sumsub/iDenfy)
      </Typography>
      <Card sx={{ bgcolor: "#fff" }}>
        <CardContent>
          <Typography fontWeight={600} color="primary">
            Проверка Know Your Customer / AntiMoneyLaundering
          </Typography>
          <Typography my={1}>
            Интеграция с провайдерами: Sumsub, iDenfy.<br />
            <b>Статус:</b> демо-подключение, форма загрузки KYC-документов, вывод прогнозов (AI).
          </Typography>
          <Button variant="contained" color="secondary">Загрузить KYC-документ</Button>
        </CardContent>
      </Card>
    </Box>
  );
}

