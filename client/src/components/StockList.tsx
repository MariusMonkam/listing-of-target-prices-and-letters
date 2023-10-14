import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../store";
import { fetchTargetPrices } from "../app/features/stocks/stocksSlice";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const containerStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "70%", // Adjust the width as needed
  margin: "0 auto", // Center the container
};

function StockList() {
  const dispatch = useAppDispatch();
  const targetPrices = useSelector((state: RootState) => state.stocks.data);
  const status = useSelector((state: RootState) => state.stocks.status);
  const error = useSelector((state: RootState) => state.stocks.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTargetPrices());
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={containerStyles}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Stock</TableCell>
              <TableCell>Target Price</TableCell>
              <TableCell>Letter</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {targetPrices.map((stock) => (
              <TableRow key={stock.stock}>
                <TableCell>{stock.stock}</TableCell>
                <TableCell>{stock.targetPrice}</TableCell>
                <TableCell>{stock.letter}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default StockList;
