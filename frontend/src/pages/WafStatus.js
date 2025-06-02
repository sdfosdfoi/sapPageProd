import React from "react";
import SecurityIcon from "@mui/icons-material/Security";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";

export default function WafStatus() {
  return (
    <Box>
      <Typography variant="h4" color="primary" mb={2} fontWeight="bold">
        <SecurityIcon sx={{ verticalAlign: "middle", mr: 1, color: "#2233EE" }} />
        Web Application Firewall
      </Typography>
      <Card sx={{ bgcolor: "#fff" }}>
        <CardContent>
          <Typography fontWeight={600} color="primary" mb={2}>
            Состояние WAF
          </Typography>
          <Chip label="Активен и обновлён" color="success" size="medium" sx={{ mr: 1 }} />
          <Chip label="Последний аудит: 2025-06-01" color="info" size="medium" />
        </CardContent>
      </Card>
    </Box>
  );
}

