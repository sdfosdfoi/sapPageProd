import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function ApiDocs() {
  return (
    <Box>
      <Typography variant="h4" color="primary" mb={2} fontWeight="bold">
        API Docs / Swagger UI
      </Typography>
      <Typography color="primary" fontWeight={600} mb={2}>
        Интерактивная документация к backend API (Swagger OpenAPI) — встраивается прямо здесь.
      </Typography>
      <Box
        sx={{
          bgcolor: "#fff",
          borderRadius: 2,
          boxShadow: 1,
          mb: 2,
          overflow: "hidden",
          p: 0,
        }}
      >
        <iframe
          src="http://localhost:8000/docs"
          title="Swagger UI"
          style={{ width: "100%", height: 700, border: "none" }}
        />
      </Box>
    </Box>
  );
}

