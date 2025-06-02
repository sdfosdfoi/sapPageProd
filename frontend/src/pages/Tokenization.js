import React from "react";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Tokenization() {
  const [pan, setPan] = React.useState("");
  const [token, setToken] = React.useState("");

  function handleTokenize() {
    if (pan.length >= 6) setToken("tok_demo_" + pan.slice(0, 6) + "***");
    else setToken("");
  }

  return (
    <Box>
      <Typography variant="h4" color="primary" mb={2} fontWeight="bold">
        <VpnKeyIcon sx={{ verticalAlign: "middle", mr: 1, color: "#2233EE" }} />
        Tokenization (PAN ➝ token)
      </Typography>
      <Card sx={{ bgcolor: "#fff" }}>
        <CardContent>
          <Typography fontWeight={600} color="primary" mb={2}>
            PAN to Token demo
          </Typography>
          <TextField
            label="Номер карты (PAN)"
            value={pan}
            onChange={e => setPan(e.target.value.replace(/[^\d]/g, ""))}
            sx={{ mr: 2, mb: 2 }}
          />
          <Button onClick={handleTokenize} variant="contained" color="primary">
            Tokenize
          </Button>
          <Typography mt={2}>
            <b>Token: </b>{token && <span style={{ color: "#24D2A2" }}>{token}</span>}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

