import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./card.css";
function createData(time, event) {
  return { time, event };
}

const rows = [
  createData("8:00 PST", "Start of Event"),
  createData("8:00 PST", "Robot and CSS and Doggy Workshop"),
  createData("8:00 PST", "Start of Event"),
  createData("8:00 PST", "Start of Event"),
  createData("8:00 PST", "Start of Event"),
  createData("8:00 PST", "Start of Event"),
  createData("8:00 PST", "Start of Event"),
  createData("8:00 PST", "Start of Event"),
  createData("8:00 PST", "Start of Event"),
];

export default function CardSat() {
  return (
    <TableContainer component={Paper} style={{ width: "40%", margin: "20px" }}>
      <Table aria-label="simple table" className="table">
        <TableHead className="tableHead">
          <TableRow className="tableRow">
            <TableCell className="tableCell">Time</TableCell>
            <TableCell align="left" className="tableCell">
              Event
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="tableBody">
          {rows.map((row) => (
            <TableRow
              key={row.time}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" className="tableCell">
                {row.time}
              </TableCell>
              <TableCell align="left" className="tableCell">
                {row.event}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
