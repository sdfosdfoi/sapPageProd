import React from "react";
import SecurityIcon from "@mui/icons-material/Security";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import HttpsIcon from "@mui/icons-material/Https";
import CloudDoneIcon from "@mui/icons-material/CloudDone";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";

export default function SecurityPage() {
  return (
    <Box>
      <Typography variant="h4" color="primary" mb={2} fontWeight="bold">
        <SecurityIcon fontSize="large" sx={{ verticalAlign: "middle", mr: 1, color: "#2233EE" }} />
        Безопасность и стандарты
      </Typography>
      <Box display="flex" gap={2} mb={2}>
        <Chip label="PCI DSS Level 1" color="success" />
        <Chip label="P2PE (End-to-End)" color="info" />
        <Chip label="WAF Enabled" color="primary" />
        <Chip label="Tokenization active" color="secondary" />
      </Box>
      <Card sx={{ mt: 2, mb: 4, bgcolor: "#fff", borderRadius: 2 }}>
        <CardContent>
          <Typography fontWeight={600} fontSize={16}>
            Сертификация и защита
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <HttpsIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Сквозное шифрование (P2PE)" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <VpnKeyIcon color="secondary" />
              </ListItemIcon>
              <ListItemText primary="Tokenization (замена PAN)" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ShieldOutlinedIcon color="error" />
              </ListItemIcon>
              <ListItemText primary="Web Application Firewall (WAF)" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CloudDoneIcon color="success" />
              </ListItemIcon>
              <ListItemText primary="PCI DSS Level 1, аудит, мониторинг" />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Box>
  );
}

