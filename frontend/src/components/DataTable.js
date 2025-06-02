import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Chip from "@mui/material/Chip";

export default function DataTable({ columns, data }) {
  return (
    <TableContainer component={Paper} sx={{ mt: 1, boxShadow: 1, borderRadius: 2 }}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((c) => (
              <TableCell
                key={c}
                sx={{
                  fontWeight: 700,
                  color: "#2233EE",
                  background: "#F6F8FB",
                  fontSize: 15,
                  borderBottom: "1.5px solid #ECECEE",
                }}
              >
                {c}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, i) => (
            <TableRow key={i}>
              {row.map((val, j) => (
                <TableCell key={j} sx={{ py: 1.3, fontSize: 16 }}>
                  {String(val).toLowerCase().includes("успех") ? (
                    <Chip label={val} color="success" size="small" />
                  ) : String(val).toLowerCase().includes("отмена") ? (
                    <Chip label={val} color="error" size="small" />
                  ) : (
                    val
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

