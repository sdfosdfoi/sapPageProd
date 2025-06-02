import React from "react";
import PaidIcon from "@mui/icons-material/Paid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

export default function Payouts() {
  const [amount, setAmount] = React.useState("");
  const [target, setTarget] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  function handleSend(e) {
    e.preventDefault();
    setSubmitted(true);
    // TODO: backend integration
  }

  return (
    <Box>
      <Typography variant="h4" color="primary" mb={2} fontWeight="bold">
        <PaidIcon sx={{ verticalAlign: "middle", mr: 1, color: "#24D2A2" }} />
        Автовыплата/Перевод
      </Typography>
      <Card sx={{ maxWidth: 420, bgcolor: "#fff" }}>
        <CardContent>
          <Typography fontWeight={500} mb={2}>Массовая выплата / Payout (demo)</Typography>
          <form onSubmit={handleSend}>
            <TextField
              label="Сумма"
              value={amount}
              onChange={e => setAmount(e.target.value.replace(/[^\d]/g, ""))}
              InputProps={{
                endAdornment: <InputAdornment position="end">₽</InputAdornment>,
              }}
              sx={{ mb: 2 }}
              fullWidth
              required
            />
            <TextField
              label="Карта/Кошелек получателя"
              value={target}
              onChange={e => setTarget(e.target.value)}
              sx={{ mb: 2 }}
              fullWidth
              required
            />
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Отправить выплату
            </Button>
          </form>
          {submitted && (
            <Typography color="success.main" mt={2}>
              <b>Успех:</b> Выплата отправлена!
            </Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}

