import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './../sharedCSS/customTable.css';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#A7C942',
    color: theme.palette.common.white,
    fontSize: 16
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#D5E8D4',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(Qualification, school_or_clg, passing_year) {
  return { Qualification, school_or_clg, passing_year };
}

let rows = [
  createData('HSC', 'C C S H S S Jargon Ghazipur', 2006),
  createData('SSC', 'MAH Inter College', 2009),
  createData('BCA', 'TERI PGC Ghazipur UP', 2013),
  createData('MCA', 'NIT Raipur CG', 2016)
];

rows = rows.sort((a, b) => a.passing_year > b.passing_year ? -1 
        : a.passing_year < b.passing_year ? 1 : 0)

export default function CustomTable() {
  return (
    <TableContainer component={Paper} className='width-auto'
      sx={{pl: { xs: '0rem', sm: '3rem', md: '5rem'}, pr: { xs: '0rem', sm: '3rem', md: '5rem'}}}
    >
      <Table className='custom-table' aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Qualification</StyledTableCell>
            <StyledTableCell align="center">School/College</StyledTableCell>
            <StyledTableCell align="center">Passing Year</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.Qualification}>
              <StyledTableCell component="th" scope="row" align="center">
                {row.Qualification}
              </StyledTableCell>
              <StyledTableCell align="center">{row.school_or_clg}</StyledTableCell>
              <StyledTableCell align="center">{row.passing_year}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
