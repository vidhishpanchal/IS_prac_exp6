import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Grid from "@material-ui/core/Grid";
import Header from "./Header";

const LeaderBoard = () => {
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("ReactJS Course", "frontend", "adnan"),
    createData("HTML Course", "frontend", "adnan"),
    createData("AngularJS", "frontend", "adnan"),
  ];
  const rowsstudents = [
    createData("Raj Sanghavi", 1, 7, 3),
    createData("Vedanti Dantwala", 2, 5, 2),
    createData("Harshal Jain", 3, 4, 2),
    createData("Adnan Ahmed", 4, 2, 1),
    createData("Vidhish Panchal", 5, 2, 1),
  ];
  return (
    <div>
      <Header />
      <h2 style={{ marginTop: "100px", marginLeft: "30px" }}>Leaderboard</h2>
      <Grid container style={{ marginTop: "55px" }}>
        <Grid item xs={12} sm={6}>
          <TableContainer className="table" component={Paper}>
            <Table
              sx={{ minWidth: "300px" }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <h3 style={{ paddingLeft: "40px" }}>
                  Top&nbsp;Selling&nbsp;Courses
                </h3>
                <TableRow>
                  <TableCell>
                    <h4>Course</h4>
                  </TableCell>
                  <TableCell>
                    <h4>Type</h4>
                  </TableCell>
                  <TableCell>
                    <h4>Instructor</h4>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell>{row.calories}</TableCell>
                    <TableCell>{row.fat}</TableCell>
                    <TableCell>{row.carbs}</TableCell>
                    <TableCell>{row.protein}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12} sm={15}>
          <TableContainer className="table" component={Paper}>
            <Table
              sx={{ minWidth: "300px" }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <h3 style={{ paddingLeft: "40px" }}>Student Leaderboard</h3>
                <TableRow>
                  <TableCell>
                    <h4>Student</h4>
                  </TableCell>
                  <TableCell>
                    <h4>Rank</h4>
                  </TableCell>
                  <TableCell>
                    <h4>Courses Enrolled</h4>
                  </TableCell>
                  <TableCell>
                    <h4>Courses Completed</h4>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rowsstudents.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell>{row.calories}</TableCell>
                    <TableCell>{row.fat}</TableCell>
                    <TableCell>{row.carbs}</TableCell>
                    <TableCell>{row.protein}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
};

export default LeaderBoard;
