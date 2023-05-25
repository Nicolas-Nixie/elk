import * as React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';

function RespApi({ data }){
    return(
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">player 1</TableCell>
                        <TableCell align="center">player 2</TableCell>
                        <TableCell align="center">Court</TableCell>
                        <TableCell align="center">Winner</TableCell>
                        <TableCell align="center">Tournament</TableCell>
                        <TableCell align="center">Round</TableCell>
                        <TableCell align="center">Series</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {data ? (data.map((row) => (
                    <TableRow key={row._id}>
                        <TableCell align="center">{row._source.Player_1}</TableCell>
                        <TableCell align="center">{row._source.Player_2}</TableCell>
                        <TableCell align="center">{row._source.Court}</TableCell>
                        <TableCell align="center">{row._source.Winner}</TableCell>
                        <TableCell align="center">{row._source.Tournament}</TableCell>
                        <TableCell align="center">{row._source.Round}</TableCell>
                        <TableCell align="center">{row._source.Series}</TableCell>
                    </TableRow>
                ))
                    ) : (
                        <TableRow>
                            <TableCell>Nothing to show</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>

    )
}

export default RespApi