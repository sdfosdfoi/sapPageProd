import React from "react";
import StatsCard from "../components/StatsCard";
import DataTable from "../components/DataTable";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import ruLocale from "date-fns/locale/ru";

const stats = [
  { title: "Мерчанты", value: 12 },
  { title: "Транзакций сегодня", value: "3,480" },
  { title: "Общий оборот", value: "17 250 000₽" },
  { title: "Споров", value: 5, statusColor: "#FF935B" }
];

const turnoverData = [
  { day: "Пн", sum: 1200000 },
  { day: "Вт", sum: 1350000 },
  { day: "Ср", sum: 1420000 },
  { day: "Чт", sum: 1010000 },
  { day: "Пт", sum: 1900000 },
  { day: "Сб", sum: 800000 },
  { day: "Вс", sum: 620000 }
];

const statusPie = [
  { name: "Успешно", value: 85 },
  { name: "Отмена", value: 7 },
  { name: "Споры", value: 3 },
  { name: "Возврат", value: 5 }
];
const pieColors = ["#24D2A2", "#FF935B", "#FFA726", "#2233EE"];

const lastEvents = [
  [111, "Выплата", "2025-06-02 13:17", "успех"],
  [112, "Новое подключение", "2025-06-02 12:10", "ожидание"],
  [113, "Лимит превышен", "2025-06-02 11:44", "отмена"],
  [114, "Диспут решён", "2025-06-01 20:10", "успех"],
];

export default function AdminDashboard() {
  const [date, setDate] = React.useState(new Date());
  const [merchant, setMerchant] = React.useState("all");
  return (
    <Box>
      <Typography variant="h4" fontWeight="bold" mb={2} color="primary">
        Кабинет администратора
      </Typography>
      <Grid container spacing={2} mb={0.5}>
        {stats.map((s) => (
          <Grid key={s.title} item xs={12} md={2.6}>
            <StatsCard {...s} />
          </Grid>
        ))}
        <Grid item xs={12} md={3.5}>
          <FormControl fullWidth size="small" sx={{ mb: 1 }}>
            <InputLabel>Мерчант</InputLabel>
            <Select
              value={merchant}
              label="Мерчант"
              onChange={e => setMerchant(e.target.value)}
            >
              <MenuItem value="all">Все</MenuItem>
              <MenuItem value="acme">Acme Bank</MenuItem>
              <MenuItem value="testshop">Test Shop</MenuItem>
              <MenuItem value="app">AppPay Demo</MenuItem>
            </Select>
          </FormControl>
          <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ruLocale}>
            <DatePicker
              label="Дата"
              value={date}
              onChange={setDate}
              renderInput={(params) => <TextField {...params} size="small" fullWidth sx={{ mt: 1 }} />}
            />
          </LocalizationProvider>
        </Grid>
      </Grid>
      <Box display="flex" flexWrap="wrap" gap={3} mt={1} mb={4}>
        <Box sx={{ width: 420, height: 260, bgcolor: "#fff", borderRadius: 3, p: 2, boxShadow: 1 }}>
          <Typography fontWeight={600} fontSize={16}>Динамика оборота (неделя)</Typography>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={turnoverData}>
              <XAxis dataKey="day" />
              <YAxis hide />
              <Tooltip />
              <Bar dataKey="sum" fill="#2233EE" radius={5} barSize={28} />
            </BarChart>
          </ResponsiveContainer>
        </Box>
        <Box sx={{ width: 260, height: 260, bgcolor: "#fff", borderRadius: 3, p: 2, boxShadow: 1 }}>
          <Typography fontWeight={600} fontSize={16}>Статусы платежей</Typography>
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie
                data={statusPie}
                cx="50%"
                cy="50%"
                innerRadius={44}
                outerRadius={70}
                fill="#2233EE"
                paddingAngle={2}
                dataKey="value"
              >
                {statusPie.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={pieColors[index]} />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Box>
      </Box>
      <Typography variant="h6" mt={2} mb={1.3} color="primary">Последние события</Typography>
      <DataTable
        columns={["ID", "Событие", "Время", "Статус"]}
        data={lastEvents}
      />
    </Box>
  );
}

