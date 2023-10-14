import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../store";
import { fetchTargetPrices } from "../app/features/stocks/stocksSlice";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/system";

const containerStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "70%", // Adjust the width as needed
  margin: "0 auto", // Center the container
};

// Define a function to generate custom row styles based on the "letter" status
const getRowStyle = (letter: string) => {
  let backgroundColor = "white"; // Default background color
  let textColor = "black"; // Default text color

  if (letter === "Buy") {
    backgroundColor = "rgba(170, 239, 170, 0.3)"; // Light green with transparency
    textColor = "darkgreen";
  } else if (letter === "Hold") {
    backgroundColor = "rgba(255, 255, 0, 0.3)"; // Light yellow with transparency
    textColor = "darkorange";
  } else if (letter === "Sell") {
    backgroundColor = "rgba(251, 117, 93, 0.3)"; // Light coral with transparency
    textColor = "darkred";
  }

  return {
    backgroundColor,
    color: textColor,
  };
};

// Define custom styled components
const CustomTableCell = styled(TableCell)(({ theme }) => ({
  fontSize: 14,
}));

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
              <CustomTableCell>Stock</CustomTableCell>
              <CustomTableCell>Target Price</CustomTableCell>
              <CustomTableCell>Letter</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {targetPrices.map((stock) => (
              <TableRow key={stock.stock} style={getRowStyle(stock.letter)}>
                <CustomTableCell>{stock.stock}</CustomTableCell>
                <CustomTableCell>{stock.targetPrice}</CustomTableCell>
                <CustomTableCell>{stock.letter}</CustomTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default StockList;
