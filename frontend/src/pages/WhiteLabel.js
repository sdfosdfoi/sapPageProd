import React from "react";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function WhiteLabel() {
  return (
    <Box>
      <Typography variant="h4" color="primary" mb={2} fontWeight="bold">
        <LocalOfferIcon sx={{ verticalAlign: "middle", mr: 1, color: "#FF935B" }} />
        White-label / B2B
      </Typography>
      <Card sx={{ bgcolor: "#fff" }}>
        <CardContent>
          <Typography fontWeight={600} color="primary">
            White-label возможности для B2B
          </Typography>
          <Typography my={1}>
            Персонализация дизайна, домены, email-рассылки, лого, условия интеграций и отчётов.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

