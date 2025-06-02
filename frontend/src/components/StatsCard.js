import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function StatsCard({ title, value, statusColor }) {
  return (
    <Card
      sx={{
        minWidth: 180,
        borderRadius: 3,
        boxShadow: "0 4px 16px #E5E8F366",
        bgcolor: "#fff",
        mx: 0.5,
      }}
      elevation={2}
    >
      <CardContent sx={{ pb: "16px!important" }}>
        <Typography fontSize={14} color="#7A8AB6" mb={1.5}>
          {title}
        </Typography>
        <Typography
          fontWeight="bold"
          fontSize={30}
          color={statusColor || "#2233EE"}
        >
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}

