import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import NotificationWidget from "./components/NotificationWidget";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import AdminDashboard from "./pages/AdminDashboard";
import MerchantDashboard from "./pages/MerchantDashboard";
import ApiDocs from "./pages/ApiDocs";
import Reports from "./pages/Reports";
import Integration from "./pages/Integration";
import Home from "./pages/Home";

const theme = createTheme({
  palette: {
    primary: { main: "#2233EE" },
    secondary: { main: "#24D2A2" },
    error: { main: "#FF935B" },
    background: {
      default: "#F6F8FB",
      paper: "#fff",
    },
    text: {
      primary: "#23272F",
      secondary: "#7A8AB6",
    },
  },
  typography: {
    fontFamily: "'Segoe UI','Roboto',Arial",
  },
});

const mainWrap = {
  display: "flex"
};
const contentWrap = {
  padding: 32,
  width: "100%",
  background: "#F6F8FB",
  minHeight: "100vh"
};

function App() {
  const [snackbar, setSnackbar] = React.useState({
    open: false,
    msg: "",
    color: "success"
  });
  const [notifications, setNotifications] = React.useState([
    "Выплата №101 успешно обработана",
    "Новая интеграция ожидает подтверждения"
  ]);
  // Пример вызова Snackbar: setSnackbar({open:true,msg:'Операция успешно!',color:'success'})
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Header />
        <div style={mainWrap}>
          <Sidebar />
          <div style={contentWrap}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/merchant" element={<MerchantDashboard />} />
              <Route path="/fraud" element={<React.Suspense fallback="Загрузка...">
                  {React.createElement(require("./pages/FraudMonitor").default)}
                </React.Suspense>} />
              <Route path="/routing" element={<React.Suspense fallback="Загрузка...">
                  {React.createElement(require("./pages/RoutingEngine").default)}
                </React.Suspense>} />
              <Route path="/security" element={<React.Suspense fallback="Загрузка...">
                  {React.createElement(require("./pages/SecurityPage").default)}
                </React.Suspense>} />
              <Route path="/integration" element={<React.Suspense fallback="Загрузка...">
                  {React.createElement(require("./pages/IntegrationPage").default)}
                </React.Suspense>} />
              <Route path="/payouts" element={<React.Suspense fallback="Загрузка...">
                  {React.createElement(require("./pages/Payouts").default)}
                </React.Suspense>} />
              <Route path="/reports-extended" element={<React.Suspense fallback="Загрузка...">
                  {React.createElement(require("./pages/ReportsExtended").default)}
                </React.Suspense>} />
              <Route path="/audit" element={<React.Suspense fallback="Загрузка...">
                  {React.createElement(require("./pages/Audit").default)}
                </React.Suspense>} />
              <Route path="/webhooks" element={<React.Suspense fallback="Загрузка...">
                  {React.createElement(require("./pages/Webhooks").default)}
                </React.Suspense>} />
              <Route path="/kyc" element={<React.Suspense fallback="Загрузка...">
                  {React.createElement(require("./pages/KycAml").default)}
                </React.Suspense>} />
              <Route path="/tokenization" element={<React.Suspense fallback="Загрузка...">
                  {React.createElement(require("./pages/Tokenization").default)}
                </React.Suspense>} />
              <Route path="/waf" element={<React.Suspense fallback="Загрузка...">
                  {React.createElement(require("./pages/WafStatus").default)}
                </React.Suspense>} />
              <Route path="/docs" element={<React.Suspense fallback="Загрузка...">
                  {React.createElement(require("./pages/ApiDocs").default)}
                </React.Suspense>} />
            </Routes>
          </div>
          <NotificationWidget notifications={notifications} />
        </div>
        <Snackbar
          open={snackbar.open}
          autoHideDuration={4000}
          onClose={() => setSnackbar(s => ({ ...s, open: false }))}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert
            onClose={() => setSnackbar(s => ({ ...s, open: false }))}
            severity={snackbar.color}
            sx={{ width: "100%" }}
          >
            {snackbar.msg}
          </Alert>
        </Snackbar>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
