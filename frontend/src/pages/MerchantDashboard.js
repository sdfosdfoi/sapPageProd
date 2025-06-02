import React from "react";
import StatsCard from "../components/StatsCard";
import DataTable from "../components/DataTable";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

const stats = [
  { title: "Баланс", value: "1 700 000₽" },
  { title: "Транзакций за месяц", value: 472 },
  { title: "API-ключ", value: "sk_test_***", statusColor: "#2233EE" }
];

const paymentsData = [
  { day: "01.06", сумма: 100000, count: 23 },
  { day: "02.06", сумма: 140000, count: 29 },
  { day: "03.06", сумма: 210000, count: 42 },
  { day: "04.06", сумма: 180000, count: 38 },
  { day: "05.06", сумма: 95000, count: 20 },
  { day: "06.06", сумма: 120000, count: 26 },
];

const filterOptions = [
  { label: "Все", value: "all" },
  { label: "Успешно", value: "success" },
  { label: "Отмена", value: "error" }
];

const lastPayments = [
  [201, "4 800₽", "2025-06-03", "успех"],
  [200, "13 200₽", "2025-06-02", "отмена"],
  [199, "6 100₽", "2025-06-02", "успех"],
  [198, "12 500₽", "2025-06-01", "успех"],
];

export default function MerchantDashboard() {
  const [status, setStatus] = React.useState("all");

  return (
    <Box>
      <Typography variant="h4" fontWeight="bold" mb={2} color="primary">
        Кабинет мерчанта
      </Typography>
      <Box display="flex" gap={2} mb={2}>
        {stats.map((s) => <StatsCard key={s.title} {...s} />)}
      </Box>
      <Box sx={{ width: 520, bgcolor: "#fff", borderRadius: 3, p: 2, boxShadow: 1, mb: 3 }}>
        <Typography fontWeight={600} fontSize={16}>
          Динамика платежей (₽, кол-во)
        </Typography>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={paymentsData}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="сумма" fill="#24D2A2" radius={6} barSize={34} />
            <Bar dataKey="count" fill="#2233EE" radius={6} barSize={16} />
          </BarChart>
        </ResponsiveContainer>
      </Box>
      <Box display="flex" alignItems="center" gap={2} mb={-2} mt={2}>
        <Typography variant="h6" color="primary">
          Последние платежи
        </Typography>
        <FormControl size="small">
          <InputLabel id="status-filter">Статус</InputLabel>
          <Select
            labelId="status-filter"
            id="filter-select"
            value={status}
            label="Статус"
            onChange={e => setStatus(e.target.value)}
            sx={{ minWidth: 120 }}
          >
            {filterOptions.map(opt => (
              <MenuItem key={opt.value} value={opt.value}>{opt.label}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <DataTable columns={["ID", "Сумма", "Дата", "Статус"]}
        data={
          status === "all"
            ? lastPayments
            : lastPayments.filter((p) =>
                status === "success"
                  ? p[3] === "успех"
                  : p[3] === "отмена"
              )
        }
      />
    </Box>
  );
}

