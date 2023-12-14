import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
//Types
import { Booking } from "../../types/BookingType";
import dayjs from "dayjs";
//Utils

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "rgba(0,0,0,0.84)",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

type EasyTableProps = {
  bookedTrainings: Booking[];
  trainingsToday: Booking[];
  tab: number;
};

export default function EasyTable({
  bookedTrainings,
  trainingsToday,
  tab,
}: EasyTableProps) {
  console.log("bookedTrainings", bookedTrainings);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1000 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Booked Trainings</StyledTableCell>
            <StyledTableCell align="center">Date</StyledTableCell>
            <StyledTableCell align="center">Type</StyledTableCell>
            <StyledTableCell align="center">Location</StyledTableCell>
            <StyledTableCell align="center">Price</StyledTableCell>
            <StyledTableCell align="center">Paid</StyledTableCell>
          </TableRow>
        </TableHead>
        {tab === 1 ? (
          <TableBody>
            {bookedTrainings
              ? bookedTrainings.map((booking) => (
                  <StyledTableRow key={booking._id}>
                    <StyledTableCell
                      component="th"
                      scope="row"
                    >{`Booked training for ${booking.time}`}</StyledTableCell>
                    {booking.date === dayjs(new Date()).format("YYYY.MM.DD") ? (
                      <StyledTableCell align="center">
                        <Chip color="info" label="Today" />
                      </StyledTableCell>
                    ) : (
                      <StyledTableCell align="center">
                        {booking.date}
                      </StyledTableCell>
                    )}
                    {booking.trainingType === "inperson" ? (
                      <StyledTableCell align="center">
                        <Chip
                          variant="outlined"
                          color="error"
                          label={"In Person"}
                        />
                      </StyledTableCell>
                    ) : (
                      <StyledTableCell align="center">
                        <Chip
                          variant="outlined"
                          color="warning"
                          label={booking.trainingType}
                        />
                      </StyledTableCell>
                    )}

                    {booking.trainingType === "inperson" ? (
                      <StyledTableCell align="center">
                        {booking.location}
                      </StyledTableCell>
                    ) : (
                      <StyledTableCell align="center">-</StyledTableCell>
                    )}
                    <StyledTableCell align="center">
                      {booking.trainingPrice}&pound;
                    </StyledTableCell>
                    {booking.paid === true ? (
                      <StyledTableCell align="center">
                        <Chip color="success" label="Paid" />
                      </StyledTableCell>
                    ) : (
                      <StyledTableCell align="center">
                        {booking.paid.toString()}
                      </StyledTableCell>
                    )}
                  </StyledTableRow>
                ))
              : null}
          </TableBody>
        ) : (
          <TableBody>
            {trainingsToday
              ? trainingsToday.map((booking) => (
                  <StyledTableRow key={booking._id}>
                    <StyledTableCell
                      component="th"
                      scope="row"
                    >{`Booked training for ${booking.time}`}</StyledTableCell>
                    {booking.date === dayjs(new Date()).format("YYYY.MM.DD") ? (
                      <StyledTableCell align="center">
                        <Chip color="info" label="Today" />
                      </StyledTableCell>
                    ) : (
                      <StyledTableCell align="center">
                        {booking.date}
                      </StyledTableCell>
                    )}
                    {booking.trainingType === "inperson" ? (
                      <StyledTableCell align="center">
                        <Chip
                          variant="outlined"
                          color="error"
                          label={"In Person"}
                        />
                      </StyledTableCell>
                    ) : (
                      <StyledTableCell align="center">
                        <Chip
                          variant="outlined"
                          color="warning"
                          label={booking.trainingType}
                        />
                      </StyledTableCell>
                    )}

                    {booking.trainingType === "inperson" ? (
                      <StyledTableCell align="center">
                        {booking.location}
                      </StyledTableCell>
                    ) : (
                      <StyledTableCell align="center">-</StyledTableCell>
                    )}
                    <StyledTableCell align="center">
                      {booking.trainingPrice}&pound;
                    </StyledTableCell>
                    {booking.paid === true ? (
                      <StyledTableCell align="center">
                        <Chip color="success" label="Paid" />
                      </StyledTableCell>
                    ) : (
                      <StyledTableCell align="center">
                        {booking.paid.toString()}
                      </StyledTableCell>
                    )}
                  </StyledTableRow>
                ))
              : null}
          </TableBody>
        )}
      </Table>
    </TableContainer>
  );
}
